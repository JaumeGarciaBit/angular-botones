import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: '<h1>HOLA CRACKS</h1>',
  styles: [':host{display:flex; justify-content:center;}','h1{color:green; cursor:pointer}']
})
export class MessageComponent implements OnInit {

  constructor(private router: Router) { }

  @HostListener('click')
  volver(){

    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
