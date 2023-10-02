import{_ as t,o as l,c as p,k as s,a as o,t as a,Q as e}from"./chunks/framework.fd95ed2e.js";const L=JSON.parse('{"title":"Container","description":"Horizontally center child components and content","frontmatter":{"title":"Container","description":"Horizontally center child components and content","slug":"container","head":[["meta",{"name":"og:description","content":"Horizontally center child components and content"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Container"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"Horizontally center child components and content"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Container"}]]},"headers":[],"relativePath":"../../../docs/components/container.md","filePath":"../../../docs/components/container.md"}'),c={name:"../../../docs/components/container.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("h2",{id:"install",tabindex:"-1"},[o("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),y=s("p",null,"Install component from your command line.",-1),m={class:"vp-code-group vp-adaptive-theme"},_=e('<div class="tabs"><input type="radio" name="group-6q6eH" id="tab-kNWwSpb" checked="checked"><label for="tab-kNWwSpb">pnpm</label><input type="radio" name="group-6q6eH" id="tab-TYQSJNj"><label for="tab-TYQSJNj">npm</label><input type="radio" name="group-6q6eH" id="tab-I_el0P3"><label for="tab-I_el0P3">yarn</label></div>',1),E={class:"blocks"},h={class:"language-console vp-adaptive-theme active"},C=s("button",{title:"Copy Code",class:"copy"},null,-1),u=s("span",{class:"lang"},"console",-1),g={class:"shiki slack-dark vp-code-dark"},D={class:"line"},f={style:{color:"#E6E6E6"}},k={class:"shiki slack-ochin vp-code-light"},b={class:"line"},v={style:{color:"#002339"}},B={class:"language-console vp-adaptive-theme"},x=s("button",{title:"Copy Code",class:"copy"},null,-1),j=s("span",{class:"lang"},"console",-1),P={class:"shiki slack-dark vp-code-dark"},T={class:"line"},S={style:{color:"#E6E6E6"}},A={class:"shiki slack-ochin vp-code-light"},$={class:"line"},q={style:{color:"#002339"}},I={class:"language-console vp-adaptive-theme"},N=s("button",{title:"Copy Code",class:"copy"},null,-1),F=s("span",{class:"lang"},"console",-1),w={class:"shiki slack-dark vp-code-dark"},H={class:"line"},V={style:{color:"#E6E6E6"}},z={class:"shiki slack-ochin vp-code-light"},J={class:"line"},Q={style:{color:"#002339"}},R=e(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Button</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/button&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Container</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/container&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Container</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Button</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://example.com&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">color:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#61dafb&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        Click me</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Container</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Button</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/button&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Container</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/container&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Container</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">href</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;https://example.com&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ color: </span><span style="color:#A44185;">&#39;#61dafb&#39;</span><span style="color:#002339;"> }}&gt;</span></span>
<span class="line"><span style="color:#002339;">        Click me</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Container</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;table&#39;&gt;</code>.</p>`,5);function U(n,W,Y,O,X,G){return l(),p("div",null,[s("h2",r,[o(a(n.$frontmatter.title)+" ",1),i]),s("p",null,a(n.$frontmatter.description),1),d,y,s("div",m,[_,s("div",E,[s("div",h,[C,u,s("pre",g,[s("code",null,[s("span",D,[s("span",f,"pnpm add @jsx-email/"+a(n.$frontmatter.slug),1)])])]),s("pre",k,[s("code",null,[s("span",b,[s("span",v,"pnpm add @jsx-email/"+a(n.$frontmatter.slug),1)])])])]),s("div",B,[x,j,s("pre",P,[s("code",null,[s("span",T,[s("span",S,"npm add @jsx-email/"+a(n.$frontmatter.slug),1)])])]),s("pre",A,[s("code",null,[s("span",$,[s("span",q,"npm add @jsx-email/"+a(n.$frontmatter.slug),1)])])])]),s("div",I,[N,F,s("pre",w,[s("code",null,[s("span",H,[s("span",V,"yarn add @jsx-email/"+a(n.$frontmatter.slug),1)])])]),s("pre",z,[s("code",null,[s("span",J,[s("span",Q,"yarn add @jsx-email/"+a(n.$frontmatter.slug),1)])])])])])]),R])}const M=t(c,[["render",U]]);export{L as __pageData,M as default};