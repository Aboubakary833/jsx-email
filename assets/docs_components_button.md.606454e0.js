import{_ as e,o as l,c as p,k as s,a as o,t as n,Q as t}from"./chunks/framework.fd95ed2e.js";const K=JSON.parse('{"title":"Button","description":"A JSX email component which styles an anchor element to appear as a button","frontmatter":{"title":"Button","description":"A JSX email component which styles an anchor element to appear as a button","slug":"button","head":[["meta",{"name":"og:description","content":"A JSX email component which styles an anchor element to appear as a button"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Button"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"A JSX email component which styles an anchor element to appear as a button"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Button"}]]},"headers":[],"relativePath":"../../../docs/components/button.md","filePath":"../../../docs/components/button.md"}'),c={name:"../../../docs/components/button.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[o("Semantics: Quite often in the email world we talk about buttons when we actually mean links. Behind the scenes this component is a "),s("code",null,"<a>"),o(" element which is styled like a "),s("code",null,"<button>"),o(" element.")])],-1),y=s("h2",{id:"install",tabindex:"-1"},[o("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),m=s("p",null,"Install component from your command line.",-1),h={class:"vp-code-group vp-adaptive-theme"},_=t('<div class="tabs"><input type="radio" name="group--bMBs" id="tab-2HImLVJ" checked="checked"><label for="tab-2HImLVJ">pnpm</label><input type="radio" name="group--bMBs" id="tab-3bYTUWe"><label for="tab-3bYTUWe">npm</label><input type="radio" name="group--bMBs" id="tab-_zUVpJp"><label for="tab-_zUVpJp">yarn</label></div>',1),u={class:"blocks"},E={class:"language-console vp-adaptive-theme active"},g=s("button",{title:"Copy Code",class:"copy"},null,-1),b=s("span",{class:"lang"},"console",-1),C={class:"shiki slack-dark vp-code-dark"},k={class:"line"},D={style:{color:"#E6E6E6"}},v={class:"shiki slack-ochin vp-code-light"},f={class:"line"},B={style:{color:"#002339"}},T={class:"language-console vp-adaptive-theme"},w=s("button",{title:"Copy Code",class:"copy"},null,-1),A=s("span",{class:"lang"},"console",-1),S={class:"shiki slack-dark vp-code-dark"},x={class:"line"},P={style:{color:"#E6E6E6"}},F={class:"shiki slack-ochin vp-code-light"},$={class:"line"},j={style:{color:"#002339"}},I={class:"language-console vp-adaptive-theme"},V=s("button",{title:"Copy Code",class:"copy"},null,-1),q=s("span",{class:"lang"},"console",-1),J={class:"shiki slack-dark vp-code-dark"},N={class:"line"},U={style:{color:"#E6E6E6"}},X={class:"shiki slack-ochin vp-code-light"},M={class:"line"},z={style:{color:"#002339"}},H=t(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Button</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/button&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Button</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://example.com&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">color:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#61dafb&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      Click me</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Button</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/button&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">href</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;https://example.com&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ color: </span><span style="color:#A44185;">&#39;#61dafb&#39;</span><span style="color:#002339;"> }}&gt;</span></span>
<span class="line"><span style="color:#002339;">      Click me</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">href: </span><span style="color:#9CDCFE;">string</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">href: </span><span style="color:#2F86D2;">string</span><span style="color:#002339;">;</span></span></code></pre></div><p>The url to navigate to when the button is clicked.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">target</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">string</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">target</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">string</span><span style="color:#002339;">;</span></span></code></pre></div><p>Specifies the value of the <code>&quot;target&quot;</code> attribute for the button <code>target</code>.</p><p>In addition to the custom props above, this component expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;a&#39;&gt;</code>.</p>`,9);function L(a,Q,R,W,Y,O){return l(),p("div",null,[s("h2",r,[o(n(a.$frontmatter.title)+" ",1),i]),s("p",null,n(a.$frontmatter.description),1),d,y,m,s("div",h,[_,s("div",u,[s("div",E,[g,b,s("pre",C,[s("code",null,[s("span",k,[s("span",D,"pnpm add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",v,[s("code",null,[s("span",f,[s("span",B,"pnpm add @jsx-email/"+n(a.$frontmatter.slug),1)])])])]),s("div",T,[w,A,s("pre",S,[s("code",null,[s("span",x,[s("span",P,"npm add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",F,[s("code",null,[s("span",$,[s("span",j,"npm add @jsx-email/"+n(a.$frontmatter.slug),1)])])])]),s("div",I,[V,q,s("pre",J,[s("code",null,[s("span",N,[s("span",U,"yarn add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",X,[s("code",null,[s("span",M,[s("span",z,"yarn add @jsx-email/"+n(a.$frontmatter.slug),1)])])])])])]),H])}const Z=e(c,[["render",L]]);export{K as __pageData,Z as default};