import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LocalBody } from 'app/models/localbody';
import { TalukaList } from 'app/models/talukaList';

@Injectable()
export class LocalBodyService {

  localBodyArray: LocalBody[] = [];
  baseUrl: string = 'http://mh.truevoters.in/WebServices/BasicData.svc';
  storageEl: any;

  constructor(private http: Http) { }

    getStateList() {
      return this.http
      .get(this.baseUrl + '/GetStates?MobileNo=7741909862&TokenId=D29D522E-F95B-4191-BF73-440C196177B1',
    ).map(res => res.json()['GetStatesResult']);
    }

    getDistrict(getStateId: number) {
      return this.http
      .get(this.baseUrl + '/GetDistricts?StateID=' + getStateId + '&MobileNo=7741909862&TokenId=D29D522E-F95B-4191-BF73-440C196177B1',
    ).map(res => res.json()['GetDistrictsResult']);
    }

    getTaluka(getDistrictId: number) {
      return this.http.
      get(this.baseUrl + '/GetTaluka?DistId=' + getDistrictId + '&MobileNo=7741909862&TokenId=D29D522E-F95B-4191-BF73-440C196177B1',
    ).map(res => res.json()['GetTalukaResult']);
    }

    addLocalBody(localBodyObj: LocalBody) {
      this.localBodyArray[0] = localBodyObj;
      return this.http.post(this.baseUrl + '/InsertLocalBody/LBData', JSON.stringify(this.localBodyArray))
      .map(res => res.json()['InsertLocalBodyResult']);
    }

    addTalukaList(talukaList: TalukaList[]) {
      return this.http.post(this.baseUrl + '/InsertLocalBodyTaluka/LBTalData',
      JSON.stringify(talukaList)).map(res => res.json()['InsertLocalBodyTalukaResult']);
    }

    getLocalBodyData() {
      return this.http.
      get(this.baseUrl + '/GetLocalBodyDetails?MobileNo=9422325020&TokenId=15BB8580-1C3D-467D-9E82-450C37E8D6FF',).map(res => res.json()['GetLocalBodyDetailsResult']);
    }
}
