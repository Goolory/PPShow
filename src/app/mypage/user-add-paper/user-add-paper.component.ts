import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-user-add-paper',
  templateUrl: './user-add-paper.component.html',
  styleUrls: ['./user-add-paper.component.css']
})
export class UserAddPaperComponent implements OnInit {
	@Input()
    public panelTitle:string;

    @Output()
    public remove = new EventEmitter<string>();
    
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
        $('#summernote').summernote({
          toolbar: [
          //[groupname, [button list]]
          ['图片',['picture']],
          ['para', ['ul', 'ol', 'paragraph']],
        ],
        height: 300,                 // set editor height
        minHeight: null,             // set minimum height of editor
        maxHeight: null,             // set maximum height of editor
        focus: false, 
      });
    });
    var option_n = 2;
    var options = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','H','I','J','K','L','M','N'];
    $(".addOption").click(function(){
      option_n++;
      $("#option_answer").append('<label class="radio-inline"><input type="radio" name="inlineRadioOptions" value="option3"> '+options[option_n]+'</label>');
    });
    $(".resetOption").click(function(){
      option_n = 2;
      $("#option_answer").html("").append('<label class="radio-inline"><input type="radio" name="inlineRadioOptions" value="option3">A</label>'+
        '<label class="radio-inline"><input type="radio" name="inlineRadioOptions" value="option3">B</label>'+
        '<label class="radio-inline"><input type="radio" name="inlineRadioOptions" value="option3">C</label>');
    });

  }

  public removePanel(){
  	this.remove.emit("remove");
  }

}
