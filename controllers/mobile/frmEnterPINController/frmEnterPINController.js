define({ 
onNavigate:function(obj){
  if(obj == undefined || obj == null){
  }
  else
    {
      this.view.tbx1.text = obj.textBoxData;
      this.view.tbx2.text = obj.textBoxData;
      this.view.tbx3.text = obj.textBoxData;
      this.view.tbx4.text = obj.textBoxData;
      this.view.tbx5.text = obj.textBoxData;
      this.view.tbx6.text = obj.textBoxData;
    }
},
  navToPrevForm:function(){
    var nvf =  new kony.mvc.Navigation("frmConfirmPIN");
    nvf.navigate();
  },
    
tbx1onEndEdit:function(){
  if(this.view.tbx1.text.length == 1)
    {
      this.view.tbx2.setFocus(true);
    }
  else
    {
      kony.print("Do nothing");
    }
},
tbx2onEndEdit:function(){
  if(this.view.tbx2.text.length == 1)
    {
      this.view.tbx3.setFocus(true);
    }
  else
    {
      kony.print("Do nothing");
    }
},
  tbx3onEndEdit:function(){
  if(this.view.tbx3.text.length == 1)
    {
      this.view.tbx4.setFocus(true);
    }
  else
    {
      kony.print("Do nothing");
    }
},
tbx4onEndEdit:function(){
  if(this.view.tbx4.text.length == 1)
    {
      this.view.tbx5.setFocus(true);
    }
  else
    {
      kony.print("Do nothing");
    }
},
tbx5onEndEdit:function(){
  if(this.view.tbx5.text.length == 1)
    {
      this.view.tbx6.setFocus(true);
    }
  else
    {
      kony.print("Do nothing");
    }
},
tbx6onDone:function(){
  var nvf =  new kony.mvc.Navigation("frmVerifyFingerPrint");
    nvf.navigate();
}

 });