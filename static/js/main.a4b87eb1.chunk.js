(this.webpackJsonpmemeapp=this.webpackJsonpmemeapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(4),r=a.n(o);a(14);var i=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"http://assets.stickpng.com/images/580b585b2edbce24c47b2a2f.png",alt:"Problem?",height:"100px",width:"100px"}),l.a.createElement("p",null,"Meme Generator"))},m=a(2),h=a(5),c=a(6),u=a(1),s=a(8),d=a(7);var g=function(e){return l.a.createElement("div",{className:"memeRoot"},l.a.createElement("form",{className:"meme-form",onSubmit:e.handleSubmit},l.a.createElement("input",{type:"text",name:"topText",placeholder:"Top Text",value:e.state.topText,onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("span",null," Text Color "),l.a.createElement("input",{type:"color",name:"topColor",value:e.state.topColor,onChange:e.handleColorChnage})),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("span",null," Border Color  "),l.a.createElement("input",{type:"color",name:"topBorderColor",value:e.state.topBorderColor,onChange:e.handleColorChnage})),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:e.state.bottomText,onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("span",null," Text Color  "),l.a.createElement("input",{type:"color",name:"bottomColor",value:e.state.bottomColor,onChange:e.handleColorChnage})),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("span",null," Border Color  "),l.a.createElement("input",{type:"color",name:"bottomBorderColor",value:e.state.bottomBorderColor,onChange:e.handleColorChnage})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Gen"),l.a.createElement("p",null,"or"),l.a.createElement("button",{className:"cutom-file-upload",type:"button",onClick:function(){document.getElementById("file-upload").click()}},"Upload Your Photo"),l.a.createElement("input",{id:"file-upload",type:"file",onChange:e.handleFileChange})),l.a.createElement("div",{className:"meme"},l.a.createElement("center",null,l.a.createElement("canvas",{id:"my-canvas",width:"568px",height:"335px"}))))},p=function(e,t,a){var n=t,l=e;t>a&&(l=e*(a/t),n=a);return{newheight:n,newwidth:l}},b=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={topText:"",topColor:"#000000",topBorderColor:"#FFFFFF",bottomText:"",bottomColor:"#000000",bottomBorderColor:"#FFFFFF",height:335,width:568,url:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[],image:void 0,updateImage:!1,maxHeight:Math.floor(.8*window.innerHeight)},e.componentDidMount=e.componentDidMount.bind(Object(u.a)(e)),e.setImage=e.setImage.bind(Object(u.a)(e)),e.setText=e.setText.bind(Object(u.a)(e)),e.handleColorChnage=e.handleColorChnage.bind(Object(u.a)(e)),e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e.handleFileChange=e.handleFileChange.bind(Object(u.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;console.log(t.data),e.setState({allMemeImgs:a})})),this.setImage()}},{key:"setImage",value:function(){var e=document.getElementById("my-canvas"),t=e.getContext("2d"),a=new Image,n=this.state,l=n.url,o=n.width,r=n.height,i=n.maxHeight,m=p(o,r,i),h=m.newheight,c=m.newwidth;a.src=l,console.log("setImage",l,c,h),a.onload=function(){e.height=h,e.width=c,t.drawImage(a,0,0,o,r,0,0,c,h)},this.setState({image:a})}},{key:"setText",value:function(){var e=document.getElementById("my-canvas").getContext("2d"),t=this.state,a=t.image,n=t.topText,l=t.topColor,o=t.topBorderColor,r=t.bottomText,i=t.bottomColor,m=t.bottomBorderColor,h=t.height,c=t.width;e.drawImage(a,0,0,c,h,0,0,c,h),e.font="2em impact, sans-serif";var u=e.measureText(n).width,s=e.measureText(r).width;e.strokeStyle=o,e.strokeText(n,c/2-u/2,30),e.strokeStyle=m,e.strokeText(r,c/2-s/2,h-10),e.fillStyle=l,e.fillText(n,c/2-u/2,30),e.fillStyle=i,e.fillText(r,c/2-s/2,h-10)}},{key:"handleColorChnage",value:function(e){var t=this,a=e.target,n=a.name,l=a.value;setTimeout((function(){t.setState(Object(m.a)({},n,l))}),250)}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(m.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t],n=a.url,l=a.width,o=a.height;this.setState({url:n,width:l,height:o,updateImage:!0})}},{key:"handleFileChange",value:function(e){var t=this,a=window.URL.createObjectURL(e.target.files[0]),n=new Image;n.onload=function(){var e=p(this.width,this.height),n=e.newheight,l=e.newwidth;t.setState({url:a,width:l,height:n,updateImage:!0})},n.src=a}},{key:"componentDidUpdate",value:function(){this.state.updateImage&&(this.setState({updateImage:!1}),this.setImage()),this.setText()}},{key:"render",value:function(){return l.a.createElement(g,{state:this.state,handleSubmit:this.handleSubmit,handleChange:this.handleChange,handleColorChnage:this.handleColorChnage,handleFileChange:this.handleFileChange})}}]),a}(n.Component);var C=function(){return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a4b87eb1.chunk.js.map