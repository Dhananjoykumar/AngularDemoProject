import { Component, OnInit } from '@angular/core';
import { StateList } from 'app/models/stateList';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { LocalBodyService } from 'app/pages/service/local-body.service';
import { DistrictList } from 'app/models/districtList';
import { LocalBody } from 'app/models/localbody';
import { TalukaList } from 'app/models/talukaList';
import * as swal from 'sweetalert';
import { Router } from '@angular/router';
@Component({
  selector: 'app-local-body',
  templateUrl: './local-body.component.html',
  styleUrls: ['./local-body.component.scss']
})
export class LocalBodyComponent implements OnInit {
  status: boolean;
  stateList: StateList[];
  districtList: DistrictList[];
   dataLocal: LocalBody[] = new Array<LocalBody>();
   talukaData: LocalBody[] = new Array<LocalBody>();
   tArray: TalukaList[] = new Array<TalukaList>();
   tData = new TalukaList;
   data: number[] = new Array<number>();


  statusData: BooleanStatus[] = [];

  localBodyData = new LocalBody;
  titleAlert = 'This field is required';

  localbodyForm: FormGroup;
  constructor(private _localBody: LocalBodyService, private _fb: FormBuilder, private router: Router) {
    // binding state list to dropdown
    this._localBody.getStateList().subscribe(res => {
      this.stateList = res;
    });

    this.status = false;
  }

  ngOnInit() {
    // showing and hiding textbox and label on select of grampanchayat
    const divsionDataLabel = <HTMLInputElement>document.getElementById('gramDivLabel');
    const divsionDataText = <HTMLInputElement>document.getElementById('gramDivText');
    divsionDataLabel.hidden = true;
    divsionDataText.hidden = true;

    // getting data on edit button click
    const localBodyModel = this._localBody.storageEl;
    if (localBodyModel) {
      this.initForm(localBodyModel);
      // this.OnStateChange();
      this.onEditDistrictChange(localBodyModel.StateId);
    }else {
      // adding data on submit button click
      this.initForm({});
  }
  }

  initForm(dataLocal) {
    this.localbodyForm = this._fb.group ({
      StateId: [dataLocal.StateId || '', Validators.required],
      // StateName: [dataLocal.StateName || ''],
      DistId: [dataLocal.DistId || '', Validators.required],
      LocalBodyId: [dataLocal.LocalBodyId || '', Validators.required],
      LocalBodyName: [dataLocal.LocalBodyName || '', Validators.required],
      LocalBodyTypeId:[dataLocal.LocalBodyTypeId || '', Validators.required],
      ACNo: [dataLocal.ACNo || '', Validators.required],
      DivisionId: [dataLocal.DivisionId || ''],
      TalukaId: [dataLocal.TalukaId || '', Validators.required]
    });
  }

  divisionChange() {
    const divsionDataLabel = <HTMLInputElement>document.getElementById('gramDivLabel');
    const selectdivision = <HTMLInputElement>document.getElementById('selectLocalBody');
    const divsionDataText = <HTMLInputElement>document.getElementById('gramDivText');
    if (selectdivision.value === '6') {
      divsionDataLabel.hidden = false;
      divsionDataText.hidden = false;
    }else {
      divsionDataLabel.hidden = true;
      divsionDataText.hidden = true;
    }
  }

  OnStateChange() {
    // get district on change of state id
    const getStateId = <HTMLInputElement>document.getElementById('selectStateId');
    this._localBody.getDistrict(+getStateId.value).subscribe(res => {
      this.districtList = res;
    });
  }
  onDistrictChange() {
    // get taluka on change of district id
    const getDistrictId = <HTMLInputElement>document.getElementById('selectDistrictId');
    this._localBody.getTaluka(+getDistrictId.value).subscribe(res => {
      this.talukaData = res;
    });
  }

  onEditDistrictChange(distId) {
    this._localBody.getDistrict(distId).subscribe(res => {
      this.districtList = res;
    });
  }

  saveLocalBody(localBodyModel, isValid) {
    if (isValid) {
      // form data push to localbody array
      this.localBodyData = this.localbodyForm.value;
      this.localBodyData.MobileNo = '9422325020';
      this.localBodyData.TokenId = '15BB8580-1C3D-467D-9E82-450C37E8D6FF';
      this._localBody.addLocalBody(this.localBodyData).subscribe(res => {
        this.dataLocal = res;
        if (this.dataLocal[0].Status === '106') {
          for (let i = 0; i < this.data.length; i++) {
            // selected taluka push to taluka object
            this.tData.TalukaId = this.data[i];
            this.tData.LocalBodyId = this.dataLocal[0].LocalBodyId;
            this.tData.MobileNo = '9422325020';
            this.tData.TokenId = '15BB8580-1C3D-467D-9E82-450C37E8D6FF';
            // taluka data object push to taluka array with localbody id
            this.tArray.push(Object.assign({}, this.tData));
          }
          this._localBody.addTalukaList(this.tArray).subscribe(res => {
            this.tArray = res;
            if (this.tArray[0].Status === '106') {
              swal ({
                title: 'Data Inserted ',
                text: 'OK',
                icon: 'success',

              }).then((value) => {
                if (value) {
                  this.router.navigateByUrl('/internalpages/local-body-table');
                }
              });
            }else {
              swal('Sorry!', 'Data Insertion Failed!', 'error');
            }
          });
        }
      });
    }else {
      swal('Sorry!', 'Data Validation Failed!', 'error');
    }

  }



  talukalistArray(e, event) {
    if (event.target.checked) {
      this.data.push(e);
    }else if (!event.target.checked) {
      const dataIndex = this.data.indexOf(e);
      this.data.splice(dataIndex, 1);
    }
  }
}

interface BooleanStatus {
  data: number;
  checkedStatus: boolean;
}
