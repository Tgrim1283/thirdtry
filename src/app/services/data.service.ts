import { Injectable } from '@angular/core';
import {addDoc, collectionData, deleteDoc, doc, Firestore} from '@angular/fire/firestore';
import {collection} from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  names: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getTask(): Observable<Task[]> {
    const taskRef = collection(this.firestore, 'tasks');
    return collectionData(taskRef, {idField: 'id'}) as Observable<Task[]>;
  }

  addTask(task : Task){
    const taskRef = collection(this.firestore, 'tasks');
    return addDoc(taskRef, task);
  }
  
  deleteTask(task: Task){
    const taskDocRef = doc(this.firestore, 'tasks/${tasks.id}');
    return deleteDoc(taskDocRef);
  }
}
