(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{c0c50162946196785e9f:function(t,i,e){"use strict";e.r(i);var s=e("f99676e4b8d34c1728b3"),o=e("811ef4ec96a893d4bbee"),a=e("3d7d336c836f7d0298a7");function r(){o.a.call(this),this.type="Camera",this.matrixWorldInverse=new s.a,this.projectionMatrix=new s.a,this.projectionMatrixInverse=new s.a}r.prototype=Object.assign(Object.create(o.a.prototype),{constructor:r,isCamera:!0,copy:function(t,i){return o.a.prototype.copy.call(this,t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){void 0===t&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new a.a),this.updateMatrixWorld(!0);var i=this.matrixWorld.elements;return t.set(-i[8],-i[9],-i[10]).normalize()},updateMatrixWorld:function(t){o.a.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return(new this.constructor).copy(this)}});var h=e("c9b83ec8d76215ee2847");function n(t,i,e,s){r.call(this),this.type="PerspectiveCamera",this.fov=void 0!==t?t:50,this.zoom=1,this.near=void 0!==e?e:.1,this.far=void 0!==s?s:2e3,this.focus=10,this.aspect=void 0!==i?i:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}e.d(i,"PerspectiveCamera",function(){return n}),n.prototype=Object.assign(Object.create(r.prototype),{constructor:n,isPerspectiveCamera:!0,copy:function(t,i){return r.prototype.copy.call(this,t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){var i=.5*this.getFilmHeight()/t;this.fov=2*h.a.RAD2DEG*Math.atan(i),this.updateProjectionMatrix()},getFocalLength:function(){var t=Math.tan(.5*h.a.DEG2RAD*this.fov);return.5*this.getFilmHeight()/t},getEffectiveFOV:function(){return 2*h.a.RAD2DEG*Math.atan(Math.tan(.5*h.a.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,i,e,s,o,a){this.aspect=t/i,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=e,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=this.near,i=t*Math.tan(.5*h.a.DEG2RAD*this.fov)/this.zoom,e=2*i,s=this.aspect*e,o=-.5*s,a=this.view;if(null!==this.view&&this.view.enabled){var r=a.fullWidth,n=a.fullHeight;o+=a.offsetX*s/r,i-=a.offsetY*e/n,s*=a.width/r,e*=a.height/n}var c=this.filmOffset;0!==c&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,i,i-e,t,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){var i=o.a.prototype.toJSON.call(this,t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,null!==this.view&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}})}}]);