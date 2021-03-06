import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../services/bike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public modelR;

  constructor(private modelService: ModelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getModelReg(this.route.snapshot.params.id);
  }

  getModelReg(id:number) {
    this.modelService.getModel(id).subscribe(
      data => {
        this.modelR = data;
      },
      err => console.error(err),
      () => console.log('models loaded')
    );
  }

}
