import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  state = {
    blue:{
      disabled: true,
      text: 'OFF'
    },
    green:{
      disabled: false,
      text: 'ON'
    },
    red:{
      disabled: true,
      text: 'OFF'
    }
  }

  onGreenClick(){

    //Activar botones rojo y azul
    //Cambiar texto de los tres botones

    this.state = {
      blue:{
        disabled: false,
        text: 'ON'
      },
      green:{
        disabled: true,
        text: 'OFF'
      },
      red:{
        disabled: false,
        text: 'ON'
      }
    }

  }
  onRedClick(){
    this.state = {
      blue:{
        disabled: true,
        text: 'OFF'
      },
      green:{
        disabled: false,
        text: 'ON'
      },
      red:{
        disabled: true,
        text: 'OFF'
      }
    }
  }
 /*  onBlueClick(){
    alert('HI CRACKS')
  }
 */
}
