(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"question":"What was Tandem previous name?","incorrect":["Tandem","Burger Shack","Extraordinary Humans"],"correct":"Devmynd"},{"question":"In Shakespeare\'s play Julius Caesar, Caesar\'s last words were...","incorrect":["Iacta alea est!","Vidi, vini, vici","Aegri somnia vana"],"correct":"Et tu, Brute?"},{"question":"A group of tigers are referred to as:","incorrect":["Chowder","Pride","Destruction"],"correct":"Ambush"},{"question":"What is the top speed an average cat can travel?","incorrect":["42 mph","13 mph","9 mph"],"correct":"31 mph"},{"question":"A cat can jump to _____ times its own height:","incorrect":["3","9","7"],"correct":"5"},{"question":"What is the only letter that doesn\'t appear in a US state name?","incorrect":["M","Z","X"],"correct":"Q"},{"question":"What is the name for a cow-bison hybrid?","incorrect":["Cowson","Bicow","Mooson"],"correct":"Beefalo"},{"question":"What is the largest freshwater lake in the world?","incorrect":["Lake Baikal","Lake Michigan","Lake Victoria"],"correct":"Lake Superior"},{"question":"In a website address bar, what does WWW stand for?","incorrect":["Wild Wild West","War World Web"],"correct":"World Wide Web"},{"question":"In a game of bingo, what number is represented by the name two little ducks?","incorrect":["20","55","77"],"correct":"22"},{"question":"According to Greek mythology, who was the first woman on Earth?","incorrect":["Lilith","Eve","Hera"],"correct":"Pandora"},{"question":"In which European city would you find Orly airport?","incorrect":["London","Belgium","Munich"],"correct":"Paris"},{"question":"Where would you find the Sea of Tranquility?","incorrect":["California","Siberia","China"],"correct":"The Moon"},{"question":"Which artist painted \'Girl with a Pearl Earrin\'?","incorrect":["Van Gogh","Picasso","Da Vinci"],"correct":"Vermeer"},{"question":"What is the official name for the \'hashtag\' symbol?","incorrect":["Number sign","Hash Sign","Pound"],"correct":"Octothorpe"},{"question":"Not American at all, where is apple pie from?","incorrect":["Japan","Ethiopia","Canada"],"correct":"England"},{"question":"What is the national animal of Scotland?","incorrect":["Bear","Rabbit","Seal"],"correct":"Unicorn"},{"question":"Where in the world is the only place where Canada is *due south*","incorrect":["Alaska","Russia","Washington"],"correct":"Detroit"},{"question":"Approximately how many grapes go into a bottle of wine?","incorrect":["500","200","1000"],"correct":"700"},{"question":"How much does a US One Dollar Bill cost to make?","incorrect":["$0.25","$1","$5"],"correct":"$0.05"},{"question":"The Vatican bank has the only ATM in the world that allows users to do what?","incorrect":["Receive withdrawls in rosary beads","Vote for the Pope","Purchase indulgences"],"correct":"Perform transactions in Latin"}]')},12:function(e,t,r){"use strict";r.r(t);var n=r(10),c=r(5),o=r(6),a=r(7),i=r(11),s=r(9),l=r(0),u=r(2),h=r.n(u),d=r(8),m=r.n(d),p=(r(18),r(1));function w(e){return Object(l.jsx)("button",{className:e.className,onClick:e.onClick,children:e.value})}var b=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).state={current_q:"Press Next to begin!",correct:null,answers:null,num:0,score:0,selected:null,correct_choice:!1},n}return Object(a.a)(r,[{key:"parseAnswers",value:function(e){var t=p[e].incorrect.slice();return t.push(p[e].correct),f(t),t}},{key:"nextQuestion",value:function(e){if(10===e)return this.setState({current_q:"All questions completed! Click to play again :)",answers:null,num:0,selected:null}),void f(p);0==e&&this.setState({score:0}),this.setState({current_q:p[e].question,correct:p[e].correct,answers:this.parseAnswers(e),num:e+1,selected:null,correct_choice:!1})}},{key:"renderAnswers",value:function(e){var t=this;if(e){var r,o=[],a=Object(c.a)(e.entries());try{var i=function(){var e=Object(n.a)(r.value,2),c=(e[0],e[1]),a="answers-button";null===t.state.selected?a+=" highlight":t.state.correct_choice?a+=" correct":t.state.selected===c?a+=" incorrect":t.state.correct===c&&(a+=" correct"),o.push(Object(l.jsx)(w,{className:a,value:c,onClick:function(){return t.selectAnswer(c)}}))};for(a.s();!(r=a.n()).done;)i()}catch(s){a.e(s)}finally{a.f()}return Object(l.jsx)("ul",{children:o})}}},{key:"selectAnswer",value:function(e){null===this.state.selected&&(e===this.state.correct?this.setState({selected:e,correct_choice:!0,score:this.state.score+1}):this.setState({selected:e}))}},{key:"render",value:function(){var e=this,t=this.state.num;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[" ",this.state.current_q]}),Object(l.jsx)("p",{id:"result"}),Object(l.jsx)("div",{children:this.renderAnswers(this.state.answers)}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"next-button shadow",onClick:function(){return e.nextQuestion(t)},children:"Next"})}),Object(l.jsx)("div",{children:"Score: "+this.state.score})]})}}]),r}(h.a.Component);function f(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}}m.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))},18:function(e,t,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.81982aaa.chunk.js.map