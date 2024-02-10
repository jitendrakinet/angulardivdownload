import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare var domtoimage: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'NgProject';
  ngOnInit(): void {
    //domtoimage.
    var title = document.getElementsByClassName("box")[0];
    var download_button = document.getElementById("dw_bt");
    
    download_button?.addEventListener("click", () => {
      domtoimage.toJpeg(title).then((data: any) => {
        // domtoimage.toJpeg //.toPng .toSvg
        var link =document.createElement("a");
        link.download="jiten.jpeg";
        link.href=data;
        link.click();
      })
    })
  }
}
