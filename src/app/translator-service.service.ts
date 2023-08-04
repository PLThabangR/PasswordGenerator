import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorServiceService {
  translate(text: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
