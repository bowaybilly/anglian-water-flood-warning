import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { IFloodWarning } from '../models/IFloodWarning';
import { IRequestResponse } from '../models/IRequestResponse';
import { IRootobject } from '../models/IRootobject';

import { RepoService } from './repo.service';

describe('RepoService', () => {
    let service: RepoService<IFloodWarning>;
    let httpTestingController: HttpTestingController;
    
         const data: IRootobject = {
            context: '',
            meta: null,
             items: [
                 {
                    id: '', description: 'Tidal Thames riverside from Putney Bridge to Teddington Weir',
                    eaAreaName: '',
                    eaRegionName: '',
                    floodArea: null,
                    floodAreaID: '',
                    isTidal: true,
                    message: 'The forecast high tide at Richmond will be 4.52 mAOD at 06:15 on 21/09/20',
                    severity: 'Flood alert',
                    severityLevel: 3,
                    timeMessageChanged: '',
                    timeRaised: '',
                    timeSeverityChanged: ''
                 }
            ]
        }
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [
              HttpClientTestingModule
              
          ]
    });
      service = TestBed.inject(RepoService);
      httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

    it('should return flood data from request to api', () => {
         const floodApi='http://environment.data.gov.uk/flood-monitoring/id/floods'
         service.get('/testapi').subscribe((response:IRootobject) => {
             expect(response.items.length).toEqual(1)
         }
         );
        
        let floodRequest = httpTestingController.match(`${floodApi}/testapi`);
        expect(floodRequest[0].request.method).toEqual('GET') 
        floodRequest[0].flush(data);
        
       
    });
     
});
