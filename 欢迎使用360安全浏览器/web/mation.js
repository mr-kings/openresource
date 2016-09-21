FSS={FRONT:0,BACK:1,DOUBLE:2,SVGNS:"http://www.w3.org/2000/svg"},FSS.Array="function"==typeof Float32Array?Float32Array:Array,FSS.Utils={isNumber:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}},function(){var e=0,t=["ms","moz","webkit","o"],n=0;for(;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),i=Math.max(0,16-(r-e)),s=window.setTimeout(function(){t(r+i)},i);return e=r+i,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),Math.PIM2=2*Math.PI,Math.PID2=Math.PI/2,Math.randomInRange=function(e,t){return e+(t-e)*Math.random()},Math.clamp=function(e,t,n){return e=Math.max(e,t),e=Math.min(e,n)},FSS.Vector3={create:function(e,t,n){var r=new FSS.Array(3);return this.set(r,e,t,n),r},clone:function(e){var t=this.create();return this.copy(t,e),t},set:function(e,t,n,r){return e[0]=t||0,e[1]=n||0,e[2]=r||0,this},setX:function(e,t){return e[0]=t||0,this},setY:function(e,t){return e[1]=t||0,this},setZ:function(e,t){return e[2]=t||0,this},copy:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],this},add:function(e,t){return e[0]+=t[0],e[1]+=t[1],e[2]+=t[2],this},addVectors:function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],this},addScalar:function(e,t){return e[0]+=t,e[1]+=t,e[2]+=t,this},subtract:function(e,t){return e[0]-=t[0],e[1]-=t[1],e[2]-=t[2],this},subtractVectors:function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],this},subtractScalar:function(e,t){return e[0]-=t,e[1]-=t,e[2]-=t,this},multiply:function(e,t){return e[0]*=t[0],e[1]*=t[1],e[2]*=t[2],this},multiplyVectors:function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],this},multiplyScalar:function(e,t){return e[0]*=t,e[1]*=t,e[2]*=t,this},divide:function(e,t){return e[0]/=t[0],e[1]/=t[1],e[2]/=t[2],this},divideVectors:function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],this},divideScalar:function(e,t){return 0!==t?(e[0]/=t,e[1]/=t,e[2]/=t):(e[0]=0,e[1]=0,e[2]=0),this},cross:function(e,t){var n=e[0],r=e[1],i=e[2];return e[0]=r*t[2]-i*t[1],e[1]=i*t[0]-n*t[2],e[2]=n*t[1]-r*t[0],this},crossVectors:function(e,t,n){return e[0]=t[1]*n[2]-t[2]*n[1],e[1]=t[2]*n[0]-t[0]*n[2],e[2]=t[0]*n[1]-t[1]*n[0],this},min:function(e,t){return e[0]<t&&(e[0]=t),e[1]<t&&(e[1]=t),e[2]<t&&(e[2]=t),this},max:function(e,t){return e[0]>t&&(e[0]=t),e[1]>t&&(e[1]=t),e[2]>t&&(e[2]=t),this},clamp:function(e,t,n){return this.min(e,t),this.max(e,n),this},limit:function(e,t,n){var r=this.length(e);return null!==t&&r<t?this.setLength(e,t):null!==n&&r>n&&this.setLength(e,n),this},dot:function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]},normalise:function(e){return this.divideScalar(e,this.length(e))},negate:function(e){return this.multiplyScalar(e,-1)},distanceSquared:function(e,t){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i},distance:function(e,t){return Math.sqrt(this.distanceSquared(e,t))},lengthSquared:function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},length:function(e){return Math.sqrt(this.lengthSquared(e))},setLength:function(e,t){var n=this.length(e);return 0!==n&&t!==n&&this.multiplyScalar(e,t/n),this}},FSS.Vector4={create:function(e,t,n,r){return r=new FSS.Array(4),this.set(r,e,t,n),r},set:function(e,t,n,r,i){return e[0]=t||0,e[1]=n||0,e[2]=r||0,e[3]=i||0,this},setX:function(e,t){return e[0]=t||0,this},setY:function(e,t){return e[1]=t||0,this},setZ:function(e,t){return e[2]=t||0,this},setW:function(e,t){return e[3]=t||0,this},add:function(e,t){return e[0]+=t[0],e[1]+=t[1],e[2]+=t[2],e[3]+=t[3],this},multiplyVectors:function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],this},multiplyScalar:function(e,t){return e[0]*=t,e[1]*=t,e[2]*=t,e[3]*=t,this},min:function(e,t){return e[0]<t&&(e[0]=t),e[1]<t&&(e[1]=t),e[2]<t&&(e[2]=t),e[3]<t&&(e[3]=t),this},max:function(e,t){return e[0]>t&&(e[0]=t),e[1]>t&&(e[1]=t),e[2]>t&&(e[2]=t),e[3]>t&&(e[3]=t),this},clamp:function(e,t,n){return this.min(e,t),this.max(e,n),this}},FSS.Color=function(e,t){this.rgba=FSS.Vector4.create(),this.hex=e||"#000000",this.opacity=FSS.Utils.isNumber(t)?t:1,this.set(this.hex,this.opacity)},FSS.Color.prototype={set:function(e,t){e=e.replace("#","");var n=e.length/3;return this.rgba[0]=parseInt(e.substring(0*n,1*n),16)/255,this.rgba[1]=parseInt(e.substring(1*n,2*n),16)/255,this.rgba[2]=parseInt(e.substring(2*n,3*n),16)/255,this.rgba[3]=FSS.Utils.isNumber(t)?t:this.rgba[3],this},hexify:function(e){return e=Math.ceil(255*e).toString(16),1===e.length&&(e="0"+e),e},format:function(){var e=this.hexify(this.rgba[0]),t=this.hexify(this.rgba[1]),n=this.hexify(this.rgba[2]);return this.hex="#"+e+t+n}},FSS.Object=function(){this.position=FSS.Vector3.create()},FSS.Object.prototype={setPosition:function(e,t,n){return FSS.Vector3.set(this.position,e,t,n),this}},FSS.Light=function(e,t){FSS.Object.call(this),this.ambient=new FSS.Color(e||"#FFFFFF"),this.diffuse=new FSS.Color(t||"#FFFFFF"),this.ray=FSS.Vector3.create()},FSS.Light.prototype=Object.create(FSS.Object.prototype),FSS.Vertex=function(e,t,n){this.position=FSS.Vector3.create(e,t,n)},FSS.Vertex.prototype={setPosition:function(e,t,n){return FSS.Vector3.set(this.position,e,t,n),this}},FSS.Triangle=function(e,t,n){this.a=e||new FSS.Vertex,this.b=t||new FSS.Vertex,this.c=n||new FSS.Vertex,this.vertices=[this.a,this.b,this.c],this.u=FSS.Vector3.create(),this.v=FSS.Vector3.create(),this.centroid=FSS.Vector3.create(),this.normal=FSS.Vector3.create(),this.color=new FSS.Color,this.polygon=document.createElementNS(FSS.SVGNS,"polygon"),this.polygon.setAttributeNS(null,"stroke-linejoin","round"),this.polygon.setAttributeNS(null,"stroke-miterlimit","1"),this.polygon.setAttributeNS(null,"stroke-width","1"),this.computeCentroid(),this.computeNormal()},FSS.Triangle.prototype={computeCentroid:function(){return this.centroid[0]=this.a.position[0]+this.b.position[0]+this.c.position[0],this.centroid[1]=this.a.position[1]+this.b.position[1]+this.c.position[1],this.centroid[2]=this.a.position[2]+this.b.position[2]+this.c.position[2],FSS.Vector3.divideScalar(this.centroid,3),this},computeNormal:function(){return FSS.Vector3.subtractVectors(this.u,this.b.position,this.a.position),FSS.Vector3.subtractVectors(this.v,this.c.position,this.a.position),FSS.Vector3.crossVectors(this.normal,this.u,this.v),FSS.Vector3.normalise(this.normal),this}},FSS.Geometry=function(){this.vertices=[],this.triangles=[],this.dirty=!1},FSS.Geometry.prototype={update:function(){if(this.dirty){var e,t;e=this.triangles.length-1;for(;0<=e;e--)t=this.triangles[e],t.computeCentroid(),t.computeNormal();this.dirty=!1}return this}},FSS.Plane=function(e,t,n,r){FSS.Geometry.call(this),this.width=e||100,this.height=t||100,this.segments=n||4,this.slices=r||4,this.segmentWidth=this.width/this.segments,this.sliceHeight=this.height/this.slices;var i,s,o;n=[],i=-0.5*this.width,s=.5*this.height,e=0;for(;e<=this.segments;e++){n.push([]),t=0;for(;t<=this.slices;t++)r=new FSS.Vertex(i+e*this.segmentWidth,s-t*this.sliceHeight),n[e].push(r),this.vertices.push(r)}e=0;for(;e<this.segments;e++){t=0;for(;t<this.slices;t++)r=n[e+0][t+0],i=n[e+0][t+1],s=n[e+1][t+0],o=n[e+1][t+1],t0=new FSS.Triangle(r,i,s),t1=new FSS.Triangle(s,i,o),this.triangles.push(t0,t1)}},FSS.Plane.prototype=Object.create(FSS.Geometry.prototype),FSS.Material=function(e,t){this.ambient=new FSS.Color(e||"#444444"),this.diffuse=new FSS.Color(t||"#FFFFFF"),this.slave=new FSS.Color},FSS.Mesh=function(e,t){FSS.Object.call(this),this.geometry=e||new FSS.Geometry,this.material=t||new FSS.Material,this.side=FSS.FRONT,this.visible=!0},FSS.Mesh.prototype=Object.create(FSS.Object.prototype),FSS.Mesh.prototype.update=function(e,t){var n,r,i,s,o;this.geometry.update();if(t){n=this.geometry.triangles.length-1;for(;0<=n;n--){r=this.geometry.triangles[n],FSS.Vector4.set(r.color.rgba),i=e.length-1;for(;0<=i;i--)s=e[i],FSS.Vector3.subtractVectors(s.ray,s.position,r.centroid),FSS.Vector3.normalise(s.ray),o=FSS.Vector3.dot(r.normal,s.ray),this.side===FSS.FRONT?o=Math.max(o,0):this.side===FSS.BACK?o=Math.abs(Math.min(o,0)):this.side===FSS.DOUBLE&&(o=Math.max(Math.abs(o),0)),FSS.Vector4.multiplyVectors(this.material.slave.rgba,this.material.ambient.rgba,s.ambient.rgba),FSS.Vector4.add(r.color.rgba,this.material.slave.rgba),FSS.Vector4.multiplyVectors(this.material.slave.rgba,this.material.diffuse.rgba,s.diffuse.rgba),FSS.Vector4.multiplyScalar(this.material.slave.rgba,o),FSS.Vector4.add(r.color.rgba,this.material.slave.rgba);FSS.Vector4.clamp(r.color.rgba,0,1)}}return this},FSS.Scene=function(){this.meshes=[],this.lights=[]},FSS.Scene.prototype={add:function(e){return e instanceof FSS.Mesh&&!~this.meshes.indexOf(e)?this.meshes.push(e):e instanceof FSS.Light&&(~this.lights.indexOf(e)||this.lights.push(e)),this},remove:function(e){return e instanceof FSS.Mesh&&~this.meshes.indexOf(e)?this.meshes.splice(this.meshes.indexOf(e),1):e instanceof FSS.Light&&~this.lights.indexOf(e)&&this.lights.splice(this.lights.indexOf(e),1),this}},FSS.Renderer=function(){this.halfHeight=this.halfWidth=this.height=this.width=0},FSS.Renderer.prototype={setSize:function(e,t){if(this.width!==e||this.height!==t)return this.width=e,this.height=t,this.halfWidth=.5*this.width,this.halfHeight=.5*this.height,this},clear:function(){return this},render:function(e){return this}},FSS.CanvasRenderer=function(){FSS.Renderer.call(this),this.element=document.createElement("canvas"),this.element.style.display="block",this.context=this.element.getContext("2d"),this.setSize(this.element.width,this.element.height)},FSS.CanvasRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.CanvasRenderer.prototype.setSize=function(e,t){return FSS.Renderer.prototype.setSize.call(this,e,t),this.element.width=e,this.element.height=t,this.context.setTransform(1,0,0,-1,this.halfWidth,this.halfHeight),this},FSS.CanvasRenderer.prototype.clear=function(){return FSS.Renderer.prototype.clear.call(this),this.context.clearRect(-this.halfWidth,-this.halfHeight,this.width,this.height),this},FSS.CanvasRenderer.prototype.render=function(e){FSS.Renderer.prototype.render.call(this,e);var t,n,r,i,s;this.clear(),this.context.lineJoin="round",this.context.lineWidth=1,t=e.meshes.length-1;for(;0<=t;t--)if(n=e.meshes[t],n.visible){n.update(e.lights,!0),r=n.geometry.triangles.length-1;for(;0<=r;r--)i=n.geometry.triangles[r],s=i.color.format(),this.context.beginPath(),this.context.moveTo(i.a.position[0],i.a.position[1]),this.context.lineTo(i.b.position[0],i.b.position[1]),this.context.lineTo(i.c.position[0],i.c.position[1]),this.context.closePath(),this.context.strokeStyle=s,this.context.fillStyle=s,this.context.stroke(),this.context.fill()}return this},/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||function(){function e(){v.remove(m),d.clear(),g=new FSS.Plane(i.width*d.width,i.height*d.height,i.segments,i.slices),y=new FSS.Material(i.ambient,i.diffuse),m=new FSS.Mesh(g,y),v.add(m);var e,t;e=g.vertices.length-1;for(;0<=e;e--)t=g.vertices[e],t.anchor=FSS.Vector3.clone(t.position),t.step=FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1)),t.time=Math.randomInRange(0,Math.PIM2)}function t(t,n){d.setSize(t,n),FSS.Vector3.set(l,d.halfWidth,d.halfHeight),e()}function n(){a=Date.now()-f;var e,t,n,o,u,h=i.depth/2;FSS.Vector3.copy(s.bounds,l),FSS.Vector3.multiplyScalar(s.bounds,s.xyScalar),FSS.Vector3.setZ(c,s.zOffset),s.autopilot&&(e=Math.sin(s.step[0]*a*s.speed),t=Math.cos(s.step[1]*a*s.speed),FSS.Vector3.set(c,s.bounds[0]*e,s.bounds[1]*t,s.zOffset)),e=v.lights.length-1;for(;0<=e;e--)t=v.lights[e],FSS.Vector3.setZ(t.position,s.zOffset),n=Math.clamp(FSS.Vector3.distanceSquared(t.position,c),s.minDistance,s.maxDistance),n=s.gravity*t.mass/n,FSS.Vector3.subtractVectors(t.force,c,t.position),FSS.Vector3.normalise(t.force),FSS.Vector3.multiplyScalar(t.force,n),FSS.Vector3.set(t.acceleration),FSS.Vector3.add(t.acceleration,t.force),FSS.Vector3.add(t.velocity,t.acceleration),FSS.Vector3.multiplyScalar(t.velocity,s.dampening),FSS.Vector3.limit(t.velocity,s.minLimit,s.maxLimit),FSS.Vector3.add(t.position,t.velocity);o=g.vertices.length-1;for(;0<=o;o--)u=g.vertices[o],e=Math.sin(u.time+u.step[0]*a*i.speed),t=Math.cos(u.time+u.step[1]*a*i.speed),n=Math.sin(u.time+u.step[2]*a*i.speed),FSS.Vector3.set(u.position,i.xRange*g.segmentWidth*e,i.yRange*g.sliceHeight*t,i.zRange*h*n-h),FSS.Vector3.add(u.position,u.anchor);g.dirty=!0,r()}function r(){d.render(v);if(s.draw){var e,t,n,r;e=v.lights.length-1;for(;0<=e;e--)r=v.lights[e],t=r.position[0],n=r.position[1],d.context.lineWidth=.5,d.context.beginPath(),d.context.arc(t,n,10,0,Math.PIM2),d.context.strokeStyle=r.ambientHex,d.context.stroke(),d.context.beginPath(),d.context.arc(t,n,4,0,Math.PIM2),d.context.fillStyle=r.diffuseHex,d.context.fill()}}var i={width:1.2,height:1.2,depth:10,segments:16,slices:8,xRange:.8,yRange:.1,zRange:1,ambient:"#010101",diffuse:"#ffffff",speed:6e-4,opacity:.5},s={count:5,xyScalar:1,zOffset:100,ambient:"#ffffff",diffuse:"#2d2d2d",speed:.001,gravity:800,dampening:.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:400,autopilot:!1,draw:!1,bounds:FSS.Vector3.create(),step:FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1))},o="canvas",u={renderer:o},a,f=Date.now(),l=FSS.Vector3.create(),c=FSS.Vector3.create(),h=document.getElementById("container"),p=document.getElementById("output"),d,v,m,g,y;(function(e){d&&p.removeChild(d.element),d=new FSS.CanvasRenderer,d.setSize(h.offsetWidth,h.offsetHeight),p.appendChild(d.element)})(u.renderer),v=new FSS.Scene,e(),function(){var e,t;e=v.lights.length-1;for(;0<=e;e--)t=v.lights[e],v.remove(t);d.clear(),e=0;for(;e<s.count;e++)t=new FSS.Light(s.ambient,s.diffuse),t.ambientHex=t.ambient.format(),t.diffuseHex=t.diffuse.format(),v.add(t),t.mass=Math.randomInRange(.5,1),t.velocity=FSS.Vector3.create(),t.acceleration=FSS.Vector3.create(),t.force=FSS.Vector3.create(),t.ring=document.createElementNS(FSS.SVGNS,"circle"),t.ring.setAttributeNS(null,"stroke",t.ambientHex),t.ring.setAttributeNS(null,"stroke-width","0.5"),t.ring.setAttributeNS(null,"fill","none"),t.ring.setAttributeNS(null,"r","10"),t.core=document.createElementNS(FSS.SVGNS,"circle"),t.core.setAttributeNS(null,"fill",t.diffuseHex),t.core.setAttributeNS(null,"r","4")}(),window.addEventListener("resize",function(e){t(h.offsetWidth,h.offsetHeight),r()}),h.addEventListener("click",function(e){FSS.Vector3.set(c,e.x,d.height-e.y),FSS.Vector3.subtract(c,l),s.autopilot=!s.autopilot}),h.addEventListener("mousemove",function(e){FSS.Vector3.set(c,e.x,d.height-e.y),FSS.Vector3.subtract(c,l)}),t(h.offsetWidth,h.offsetHeight),n()}();