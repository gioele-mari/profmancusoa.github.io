import{S as Jt,i as Ut,s as Zt,C as dt,w as Kt,x as Wt,y as Xt,z as ht,A as Dt,f as eo,t as to,B as oo,P as St,l as i,r as s,a as u,m as p,n as r,u as n,h as t,c as m,p as ft,q as ao,b as l,G as o,E as so}from"../../chunks/index-02a6647b.js";import{P as no}from"../../chunks/_post-a7638e37.js";import"../../chunks/helpers-e147ed77.js";import"../../chunks/Categoria.svelte_svelte_type_style_lang-56b3738a.js";function lo(x){let c,_,E,v,f,d,L,qe,ae,H,Oe,se,N,Te,ne,$,we,le,y,xe,A,Le,He,V,Ne,ie,z,$e,F,je,Be,Q,De,Se,pe,I,Gt=`<code class="language-yaml"><span class="token punctuation">---</span>
<span class="token key atrule">id</span><span class="token punctuation">:</span> &lt;id univoco del posto<span class="token punctuation">></span>
<span class="token key atrule">titolo</span><span class="token punctuation">:</span> &lt;titolo del post<span class="token punctuation">></span> <span class="token punctuation">-</span>  solo lettere numeri e singolo spazio tra le parole
<span class="token key atrule">featured</span><span class="token punctuation">:</span> true<span class="token punctuation">|</span>false <span class="token punctuation">-</span> indica se il post \xE8 featured sulla home page
<span class="token key atrule">autore</span><span class="token punctuation">:</span> &lt;nome autore<span class="token punctuation">></span>
<span class="token key atrule">data</span><span class="token punctuation">:</span> &lt;yyyy<span class="token punctuation">-</span>mm<span class="token punctuation">-</span>dd<span class="token punctuation">></span>
<span class="token key atrule">cover</span><span class="token punctuation">:</span> &lt;immagine della cover del post<span class="token punctuation">></span>
<span class="token key atrule">introduzione</span><span class="token punctuation">:</span> &lt;breve introduzione che viene visualizzata sulla home<span class="token punctuation">></span>
<span class="token key atrule">sezione</span><span class="token punctuation">:</span> &lt;sezione principale del blog<span class="token punctuation">></span>
<span class="token key atrule">categorie</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> categoria 1
  <span class="token punctuation">-</span> categoria 2
  <span class="token punctuation">-</span> categoria 3
<span class="token punctuation">---</span></code>`,re,j,Re,ce,M,At=`<code class="language-yaml"><span class="token punctuation">---</span>
<span class="token key atrule">id</span><span class="token punctuation">:</span> 2022<span class="token punctuation">-</span>08<span class="token punctuation">-</span>19<span class="token punctuation">-</span><span class="token number">0</span>
<span class="token key atrule">titolo</span><span class="token punctuation">:</span> Blog Post Template
<span class="token key atrule">featured</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">autore</span><span class="token punctuation">:</span> ProfMancusoa
<span class="token key atrule">data</span><span class="token punctuation">:</span> <span class="token datetime number">2022-08-19</span>
<span class="token key atrule">cover</span><span class="token punctuation">:</span> cover.jpg
<span class="token key atrule">introduzione</span><span class="token punctuation">:</span> Questo post descrive brevemente come creare nuovi post
<span class="token key atrule">sezione</span><span class="token punctuation">:</span> Blog
<span class="token key atrule">categorie</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Programmazione
  <span class="token punctuation">-</span> Java Script
  <span class="token punctuation">-</span> Front End
<span class="token punctuation">---</span></code>`,ue,g,Ge,Y,Ae,Ve,me,b,J,Fe,Qe,q,Ye,U,Je,Ue,fe,B,Ze,de,O,Ke,Z,We,ve,P,Xe,K,W,he,et,ke,D,tt,_e,T,Vt=`<code class="language-yaml"><span class="token punctuation">---</span>
<span class="token punctuation">---</span>
<span class="token key atrule">titolo</span><span class="token punctuation">:</span> Blog Post Template
<span class="token key atrule">cover</span><span class="token punctuation">:</span> cover.jpg
<span class="token punctuation">---</span></code>`,Ee,k,ot,X,at,st,h,nt,lt,ee,it,ze,S,pt,ye,C,te,rt,ct,R,ut;return{c(){c=i("h1"),_=s("Come scrivere un post"),E=u(),v=i("p"),f=s("Il formato "),d=i("strong"),L=s("Markdown"),qe=s(` \xE8 oggi giorno molto popolare ed offre innumerevoli vantaggi nella scrittura di documenti e articoli.
Per tale motivo i post di questo blog si scrivono in questo formato. In questo modo per poter scrivere su questo blog non sar\xE0 necessario conoscere l\u2019HTML e la realizzazione di articoli sar\xE0 veloce e di immediata comprensione.`),ae=u(),H=i("p"),Oe=s("Per semplificare e razionalizzare, la struttura di questo Blog \xE8 necessario rispettare alcune semplici convenzioni."),se=u(),N=i("h2"),Te=s("Convenzioni"),ne=u(),$=i("h3"),we=s("Formato file"),le=u(),y=i("p"),xe=s(`Ogni articolo o post di questo blog \xE8 rappresentato da un file testuale in formato Markdown.
Il file del post deve essere localizzato nella directory `),A=i("code"),Le=s("src/routes/blog"),He=s(" e deve avere un estensione "),V=i("code"),Ne=s(".md"),ie=u(),z=i("p"),$e=s("Il file deve avere un "),F=i("code"),je=s("frontmatter"),Be=s(`  che permette all\u2019autore di specificare alcuni importanti metadati relativi al posto stesso.
Il frontmatter \xE8 scritto in `),Q=i("code"),De=s("YAML"),Se=s(" deve essere cos\xEC composto:"),pe=u(),I=i("pre"),re=u(),j=i("p"),Re=s("Vediamo un esempio"),ce=u(),M=i("pre"),ue=u(),g=i("p"),Ge=s("Il file .md deve aver per nome lo "),Y=i("code"),Ae=s("slug"),Ve=s(" del titolo. In altre parole il nome del file deve essere uguale al titolo dove:"),me=u(),b=i("ul"),J=i("li"),Fe=s("tutte le lettere sono convertite in minuscolo"),Qe=u(),q=i("li"),Ye=s("gli spazi sono conventiti in "),U=i("strong"),Je=s("-"),Ue=s("  (dash)"),fe=u(),B=i("h3"),Ze=s("Cover image"),de=u(),O=i("p"),Ke=s("In modo analogo al nome del file .md, anche il file della cover del post, indicato nel frontmatter, deve essere posizionato nella directory "),Z=i("code"),We=s("static/img/posts/[slug]"),ve=u(),P=i("p"),Xe=s("dove la sub-directory "),K=i("strong"),W=i("em"),he=s("[slug]"),et=s(" \xE8 esattamente uguale al nome del file."),ke=u(),D=i("p"),tt=s("Vediamo un esempio:"),_e=u(),T=i("pre"),Ee=u(),k=i("p"),ot=s("Il file "),X=i("em"),at=s("cover.jpg"),st=s(" deve essere posizionato in "),h=i("code"),nt=s("static/img/posts/blog-post-template/cover.jpg"),lt=s(" e il file del post deve essere posizionato in "),ee=i("code"),it=s("src/routes/blog/blog-post-template.md"),ze=u(),S=i("p"),pt=s(`Come anticipato le convenzioni sono pochissime ed utili a mantener eil blog ordinato nel tempo.
Non ci sono altre convenzioni da rispettare.`),ye=u(),C=i("p"),te=i("strong"),rt=s("Non mi resta che augurarvi buon blogging !!!!"),ct=u(),R=i("span"),ut=s("\u{1F92A}"),this.h()},l(e){c=p(e,"H1",{});var a=r(c);_=n(a,"Come scrivere un post"),a.forEach(t),E=m(e),v=p(e,"P",{});var ge=r(v);f=n(ge,"Il formato "),d=p(ge,"STRONG",{});var vt=r(d);L=n(vt,"Markdown"),vt.forEach(t),qe=n(ge,` \xE8 oggi giorno molto popolare ed offre innumerevoli vantaggi nella scrittura di documenti e articoli.
Per tale motivo i post di questo blog si scrivono in questo formato. In questo modo per poter scrivere su questo blog non sar\xE0 necessario conoscere l\u2019HTML e la realizzazione di articoli sar\xE0 veloce e di immediata comprensione.`),ge.forEach(t),ae=m(e),H=p(e,"P",{});var kt=r(H);Oe=n(kt,"Per semplificare e razionalizzare, la struttura di questo Blog \xE8 necessario rispettare alcune semplici convenzioni."),kt.forEach(t),se=m(e),N=p(e,"H2",{});var _t=r(N);Te=n(_t,"Convenzioni"),_t.forEach(t),ne=m(e),$=p(e,"H3",{});var Et=r($);we=n(Et,"Formato file"),Et.forEach(t),le=m(e),y=p(e,"P",{});var oe=r(y);xe=n(oe,`Ogni articolo o post di questo blog \xE8 rappresentato da un file testuale in formato Markdown.
Il file del post deve essere localizzato nella directory `),A=p(oe,"CODE",{});var zt=r(A);Le=n(zt,"src/routes/blog"),zt.forEach(t),He=n(oe," e deve avere un estensione "),V=p(oe,"CODE",{});var yt=r(V);Ne=n(yt,".md"),yt.forEach(t),oe.forEach(t),ie=m(e),z=p(e,"P",{});var G=r(z);$e=n(G,"Il file deve avere un "),F=p(G,"CODE",{});var gt=r(F);je=n(gt,"frontmatter"),gt.forEach(t),Be=n(G,`  che permette all\u2019autore di specificare alcuni importanti metadati relativi al posto stesso.
Il frontmatter \xE8 scritto in `),Q=p(G,"CODE",{});var bt=r(Q);De=n(bt,"YAML"),bt.forEach(t),Se=n(G," deve essere cos\xEC composto:"),G.forEach(t),pe=m(e),I=p(e,"PRE",{class:!0});var Ft=r(I);Ft.forEach(t),re=m(e),j=p(e,"P",{});var Pt=r(j);Re=n(Pt,"Vediamo un esempio"),Pt.forEach(t),ce=m(e),M=p(e,"PRE",{class:!0});var Qt=r(M);Qt.forEach(t),ue=m(e),g=p(e,"P",{});var be=r(g);Ge=n(be,"Il file .md deve aver per nome lo "),Y=p(be,"CODE",{});var Ct=r(Y);Ae=n(Ct,"slug"),Ct.forEach(t),Ve=n(be," del titolo. In altre parole il nome del file deve essere uguale al titolo dove:"),be.forEach(t),me=m(e),b=p(e,"UL",{});var Pe=r(b);J=p(Pe,"LI",{});var It=r(J);Fe=n(It,"tutte le lettere sono convertite in minuscolo"),It.forEach(t),Qe=m(Pe),q=p(Pe,"LI",{});var Ce=r(q);Ye=n(Ce,"gli spazi sono conventiti in "),U=p(Ce,"STRONG",{});var Mt=r(U);Je=n(Mt,"-"),Mt.forEach(t),Ue=n(Ce,"  (dash)"),Ce.forEach(t),Pe.forEach(t),fe=m(e),B=p(e,"H3",{});var qt=r(B);Ze=n(qt,"Cover image"),qt.forEach(t),de=m(e),O=p(e,"P",{});var mt=r(O);Ke=n(mt,"In modo analogo al nome del file .md, anche il file della cover del post, indicato nel frontmatter, deve essere posizionato nella directory "),Z=p(mt,"CODE",{});var Ot=r(Z);We=n(Ot,"static/img/posts/[slug]"),Ot.forEach(t),mt.forEach(t),ve=m(e),P=p(e,"P",{});var Ie=r(P);Xe=n(Ie,"dove la sub-directory "),K=p(Ie,"STRONG",{});var Tt=r(K);W=p(Tt,"EM",{});var wt=r(W);he=n(wt,"[slug]"),wt.forEach(t),Tt.forEach(t),et=n(Ie," \xE8 esattamente uguale al nome del file."),Ie.forEach(t),ke=m(e),D=p(e,"P",{});var xt=r(D);tt=n(xt,"Vediamo un esempio:"),xt.forEach(t),_e=m(e),T=p(e,"PRE",{class:!0});var Yt=r(T);Yt.forEach(t),Ee=m(e),k=p(e,"P",{});var w=r(k);ot=n(w,"Il file "),X=p(w,"EM",{});var Lt=r(X);at=n(Lt,"cover.jpg"),Lt.forEach(t),st=n(w," deve essere posizionato in "),h=p(w,"CODE",{});var Ht=r(h);nt=n(Ht,"static/img/posts/blog-post-template/cover.jpg"),Ht.forEach(t),lt=n(w," e il file del post deve essere posizionato in "),ee=p(w,"CODE",{});var Nt=r(ee);it=n(Nt,"src/routes/blog/blog-post-template.md"),Nt.forEach(t),w.forEach(t),ze=m(e),S=p(e,"P",{});var $t=r(S);pt=n($t,`Come anticipato le convenzioni sono pochissime ed utili a mantener eil blog ordinato nel tempo.
Non ci sono altre convenzioni da rispettare.`),$t.forEach(t),ye=m(e),C=p(e,"P",{});var Me=r(C);te=p(Me,"STRONG",{});var jt=r(te);rt=n(jt,"Non mi resta che augurarvi buon blogging !!!!"),jt.forEach(t),ct=m(Me),R=p(Me,"SPAN",{style:!0});var Bt=r(R);ut=n(Bt,"\u{1F92A}"),Bt.forEach(t),Me.forEach(t),this.h()},h(){ft(I,"class","language-yaml"),ft(M,"class","language-yaml"),ft(T,"class","language-yaml"),ao(R,"font-size","50px")},m(e,a){l(e,c,a),o(c,_),l(e,E,a),l(e,v,a),o(v,f),o(v,d),o(d,L),o(v,qe),l(e,ae,a),l(e,H,a),o(H,Oe),l(e,se,a),l(e,N,a),o(N,Te),l(e,ne,a),l(e,$,a),o($,we),l(e,le,a),l(e,y,a),o(y,xe),o(y,A),o(A,Le),o(y,He),o(y,V),o(V,Ne),l(e,ie,a),l(e,z,a),o(z,$e),o(z,F),o(F,je),o(z,Be),o(z,Q),o(Q,De),o(z,Se),l(e,pe,a),l(e,I,a),I.innerHTML=Gt,l(e,re,a),l(e,j,a),o(j,Re),l(e,ce,a),l(e,M,a),M.innerHTML=At,l(e,ue,a),l(e,g,a),o(g,Ge),o(g,Y),o(Y,Ae),o(g,Ve),l(e,me,a),l(e,b,a),o(b,J),o(J,Fe),o(b,Qe),o(b,q),o(q,Ye),o(q,U),o(U,Je),o(q,Ue),l(e,fe,a),l(e,B,a),o(B,Ze),l(e,de,a),l(e,O,a),o(O,Ke),o(O,Z),o(Z,We),l(e,ve,a),l(e,P,a),o(P,Xe),o(P,K),o(K,W),o(W,he),o(P,et),l(e,ke,a),l(e,D,a),o(D,tt),l(e,_e,a),l(e,T,a),T.innerHTML=Vt,l(e,Ee,a),l(e,k,a),o(k,ot),o(k,X),o(X,at),o(k,st),o(k,h),o(h,nt),o(k,lt),o(k,ee),o(ee,it),l(e,ze,a),l(e,S,a),o(S,pt),l(e,ye,a),l(e,C,a),o(C,te),o(te,rt),o(C,ct),o(C,R),o(R,ut)},p:so,d(e){e&&t(c),e&&t(E),e&&t(v),e&&t(ae),e&&t(H),e&&t(se),e&&t(N),e&&t(ne),e&&t($),e&&t(le),e&&t(y),e&&t(ie),e&&t(z),e&&t(pe),e&&t(I),e&&t(re),e&&t(j),e&&t(ce),e&&t(M),e&&t(ue),e&&t(g),e&&t(me),e&&t(b),e&&t(fe),e&&t(B),e&&t(de),e&&t(O),e&&t(ve),e&&t(P),e&&t(ke),e&&t(D),e&&t(_e),e&&t(T),e&&t(Ee),e&&t(k),e&&t(ze),e&&t(S),e&&t(ye),e&&t(C)}}}function io(x){let c,_;const E=[x[0],Rt];let v={$$slots:{default:[lo]},$$scope:{ctx:x}};for(let f=0;f<E.length;f+=1)v=dt(v,E[f]);return c=new no({props:v}),{c(){Kt(c.$$.fragment)},l(f){Wt(c.$$.fragment,f)},m(f,d){Xt(c,f,d),_=!0},p(f,[d]){const L=d&1?ht(E,[d&1&&Dt(f[0]),d&0&&Dt(Rt)]):{};d&2&&(L.$$scope={dirty:d,ctx:f}),c.$set(L)},i(f){_||(eo(c.$$.fragment,f),_=!0)},o(f){to(c.$$.fragment,f),_=!1},d(f){oo(c,f)}}}const Rt={id:"2022-08-19-0",titolo:"Come scrivere un post in Markdown",featured:!1,autore:"ProfMancusoa",data:"2022-08-19T00:00:00.000Z",cover:"cover.jpg",introduzione:"Questo post descrive brevemente come creare nuovi post",sezione:"Blog",categorie:["Blog"]};function po(x,c,_){return x.$$set=E=>{_(0,c=dt(dt({},c),St(E)))},c=St(c),[c]}class fo extends Jt{constructor(c){super(),Ut(this,c,po,io,Zt,{})}}export{fo as default,Rt as metadata};
