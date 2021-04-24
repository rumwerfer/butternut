(this.webpackJsonpbutternut=this.webpackJsonpbutternut||[]).push([[0],{59:function(e,t,i){},60:function(e,t,i){},74:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),s=i(25),r=i.n(s),c=(i(58),i(59),i(23)),o=(i(60),i(15)),l=i(16),j=i(30),d=i(17),m=i(18),u=i(8),h=i(48),b=i(53),g=i(27),p=i(40),x=i(1),O=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"getTags",value:function(){var e=new Set;return this.props.recipes.map((function(t){return t.tags.map((function(t){return e.add(t)}))})),Object(h.a)(Array,Object(b.a)(e)).sort()}},{key:"render",value:function(){var e=this;return Object(x.jsx)(g.a,{expand:"md",variant:"dark",className:"pt-0 bg-green",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)(g.a.Brand,{onClick:function(){return e.props.setFilter(null)},className:"link",children:[Object(x.jsx)("h1",{className:"text text-header",children:"Butternut"}),Object(x.jsx)("p",{className:"text text-header text-small",children:"simple vegan recipes"})]}),Object(x.jsx)(g.a.Toggle,{"aria-controls":"navbar"}),Object(x.jsx)(g.a.Collapse,{id:"navbar",children:Object(x.jsx)(p.a,{className:"ml-auto",activeKey:this.props.filter,children:this.getTags().map((function(t){return Object(x.jsx)(p.a.Item,{children:Object(x.jsx)(p.a.Link,{eventKey:t,onSelect:function(){return e.props.setFilter(t)},children:t})})}))})})]})})}}]),i}(n.Component),f=i(41),k=i(19),v=i(22),y=i(36),w=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.recipe;return Object(x.jsx)(v.a,{sm:12,md:6,xl:4,className:"mt-2 mb-2",children:Object(x.jsx)(f.a,{className:"teaser",children:Object(x.jsx)(c.b,{to:"/r/".concat(e.id),className:"text-teaser",children:Object(x.jsxs)(k.a,{children:[Object(x.jsx)(f.a.Img,{src:"../assets/images/"+e.id+".jpg",className:"img-teaser"}),Object(x.jsxs)(f.a.Body,{class:"teaser-body",children:[Object(x.jsx)("h2",{className:"text text-teaser-heading",children:e.name}),Object(x.jsx)("div",{className:"tags",children:e.tags.sort().map((function(e){return Object(x.jsx)(y.a,{pill:!0,className:"text text-tag text-tag-small",children:e})}))})]})]})})})})}}]),i}(n.Component),C=i(37),N=[{id:0,name:"Seitan Burger",tags:["quick","main","protein"],ingredients:["bun","seitan patty","tomato","mayonnaise"],directions:["slice bread","put stuff inside","done"],imgAuthor:"Roee Shpernik",imgLicense:"CC BY-SA 4.0",imgSource:"https://commons.wikimedia.org/wiki/File:%D7%94%D7%9E%D7%91%D7%95%D7%A8%D7%92%D7%A8_%D7%98%D7%91%D7%A2%D7%95%D7%A0%D7%99.jpg"},{id:1,name:"Tiramisu",tags:["dessert","italian"],ingredients:["zwieback","coffee","soy milk","coconut milk","pudding"],directions:["make strong coffee","make vanilla pudding with soy milk","mix pudding with coconut milk","make layers"],imgAuthor:"Raffaele Diomede",imgLicense:"CC BY 2.0",imgSource:"https://commons.wikimedia.org/wiki/File:Tiramisu_-_Raffaele_Diomede.jpg"},{id:2,name:"Yakisoba",tags:["main","asian","protein"],ingredients:["rice noodles","hoisin sauce","onion","carrots","sesame"],directions:["fry onion and carrots in a wok","cook rice noodles for 3 minutes","add noodles to wok","add hoisin sauce and sesame"],imgAuthor:"Shinkawana",imgLicense:"CC BY 3.0",imgSource:"https://commons.wikimedia.org/wiki/File:Fujinomiya-yakisoba.jpg"},{id:3,name:"Pizza",tags:["main","italian"],ingredients:["flour","yeast","olive oil","salt"],directions:["mix ingredients with lukewarm water","knead for 10 minutes","let it rest at a warm place"],imgAuthor:"Lokesh Dhakar",imgLicense:"CC BY 2.0",imgSource:"https://commons.wikimedia.org/wiki/File:Vegan_pizza_at_Pizza_Luc%C3%A9.jpg"},{id:4,name:"Brownies",tags:["dessert"],ingredients:["flour","cocoa","margarine"],directions:["mix everything","put in oven","done"],imgAuthor:"Veganbaking.net",imgLicense:"CC BY-SA 2.0",imgSource:"https://commons.wikimedia.org/wiki/File:Vegan_Chocolate_Fudge.jpg"},{id:5,name:"Spring Rolls",tags:["main","asian","quick"],ingredients:["carrots","cabbage","rice paper","tofu"],directions:["stir fry veggies and tofu shortly","moisten rice paper","put veggies on rice paper and roll","fry spring roll"],imgAuthor:"Jennifer",imgLicense:"CC BY-SA 2.0",imgSource:"https://commons.wikimedia.org/wiki/File:Vegan_spring_rolls.jpg"}],F=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"filterRecipes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.filter;return e?N.filter((function(t){return t.tags.includes(e)})):N}},{key:"render",value:function(){return Object(x.jsx)(C.a,{fluid:!0,children:Object(x.jsx)(k.a,{children:this.filterRecipes().map((function(e){return Object(x.jsx)(w,{recipe:e})}))})})}}]),i}(n.Component),S=i(28),D=i(52),A=i(50),B=i(51),_=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.recipe;return Object(x.jsxs)(C.a,{children:[Object(x.jsxs)(k.a,{className:"mt-3",children:[Object(x.jsx)(v.a,{xs:9,sm:11,children:Object(x.jsx)("h2",{className:"text text-recipe-heading",children:e.name})}),Object(x.jsx)(v.a,{xs:1,children:Object(x.jsx)(c.b,{to:"/",children:Object(x.jsx)(A.a,{icon:B.a,color:"black"})})})]}),Object(x.jsxs)(k.a,{children:[Object(x.jsxs)(v.a,{xs:12,sm:6,children:[Object(x.jsx)("h3",{className:"text text-recipe-subheading",children:"Ingredients"}),Object(x.jsx)(S.a,{children:e.ingredients.map((function(e){return Object(x.jsx)(S.a.Item,{children:e})}))})]}),Object(x.jsxs)(v.a,{xs:12,sm:6,children:[Object(x.jsx)("h3",{className:"text text-recipe-subheading",children:"Directions"}),Object(x.jsx)(S.a,{variant:"flush",children:e.directions.map((function(e){return Object(x.jsx)(S.a.Item,{children:e})}))})]})]}),Object(x.jsx)(k.a,{className:"mt-3 justify-content-center tags",children:e.tags.sort().map((function(e){return Object(x.jsx)(y.a,{pill:!0,className:"text text-tag text-tag-big",children:e})}))}),Object(x.jsx)(k.a,{className:"mt-3",children:Object(x.jsxs)(v.a,{xs:12,lg:{span:10,offset:1},xl:{span:8,offset:2},children:[Object(x.jsx)(D.a,{src:"../assets/images/"+e.id+".jpg",fluid:!0,rounded:!0}),Object(x.jsx)("p",{children:Object(x.jsxs)("small",{children:["Image: ",Object(x.jsx)("a",{href:e.imgSource,target:"_blank",rel:"noreferrer",children:e.imgAuthor})," (",e.imgLicense,")"]})})]})})]})}}]),i}(n.Component),L=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={filter:""},n.setFilter=n.setFilter.bind(Object(j.a)(n)),n}return Object(l.a)(i,[{key:"setFilter",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{recipes:N,setFilter:this.setFilter,filter:this.state.filter}),Object(x.jsxs)(u.d,{children:[Object(x.jsx)(u.b,{exact:!0,path:"/",component:function(){return Object(x.jsx)(F,{recipes:N,filter:e.state.filter})}}),Object(x.jsx)(u.b,{path:"/r/:id",component:function(e){var t=e.match;return Object(x.jsx)(_,{recipe:N[t.params.id]})}}),Object(x.jsx)(u.a,{to:"/"})]})]})}}]),i}(n.Component);var I=function(){return Object(x.jsx)(c.a,{children:Object(x.jsx)(L,{})})},z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,76)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),z()}},[[74,1,2]]]);
//# sourceMappingURL=main.8930ee57.chunk.js.map