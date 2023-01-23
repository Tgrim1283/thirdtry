import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { title } from 'process';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskName : any = "";
  taskList : string[] = [];
  constructor(private dataService: DataService, private alertCtrl: AlertController) {
    this.dataService.getTask().subscribe(res => {
      console.log(res);
    })
  }

  async enterItem(){
    if (this.taskName.length > 0) {
      let task = this.taskName;
      console.log(task);
      this.taskList.push(task);
      this.dataService.addTask({names: task}); 
      this.taskName = '';
  }
}

deleteTask(index: number) {
this.dataService.deleteTask({names: this.taskList[index]})
this.taskList.splice(index, 1);
}
}

