import{_ as t,o as e,c as p,k as s,a as o,t as a,Q as l}from"./chunks/framework.fd95ed2e.js";const es=JSON.parse('{"title":"Row","description":"Separates content boundaries horizontally","frontmatter":{"title":"Row","description":"Separates content boundaries horizontally","slug":"row","head":[["meta",{"name":"og:description","content":"Separates content boundaries horizontally"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Row"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"Separates content boundaries horizontally"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Row"}]]},"headers":[],"relativePath":"../../../docs/components/row.md","filePath":"../../../docs/components/row.md"}'),c={name:"../../../docs/components/row.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),y=s("h2",{id:"install",tabindex:"-1"},[o("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),d=s("p",null,"Install component from your command line.",-1),E={class:"vp-code-group vp-adaptive-theme"},m=l('<div class="tabs"><input type="radio" name="group-xLvQk" id="tab-BjvWXnF" checked="checked"><label for="tab-BjvWXnF">pnpm</label><input type="radio" name="group-xLvQk" id="tab-74-kgxJ"><label for="tab-74-kgxJ">bun</label><input type="radio" name="group-xLvQk" id="tab-cNV4C1M"><label for="tab-cNV4C1M">npm</label><input type="radio" name="group-xLvQk" id="tab-_dClOfB"><label for="tab-_dClOfB">yarn</label></div>',1),_={class:"blocks"},h={class:"language-console vp-adaptive-theme active"},C=s("button",{title:"Copy Code",class:"copy"},null,-1),g=s("span",{class:"lang"},"console",-1),u={class:"shiki slack-dark vp-code-dark"},f={class:"line"},B={style:{color:"#E6E6E6"}},k={class:"shiki slack-ochin vp-code-light"},b={class:"line"},v={style:{color:"#002339"}},D={class:"language-console vp-adaptive-theme"},w=s("button",{title:"Copy Code",class:"copy"},null,-1),$=s("span",{class:"lang"},"console",-1),j={class:"shiki slack-dark vp-code-dark"},R={class:"line"},S={style:{color:"#E6E6E6"}},x={class:"shiki slack-ochin vp-code-light"},A={class:"line"},P={style:{color:"#002339"}},T={class:"language-console vp-adaptive-theme"},V=s("button",{title:"Copy Code",class:"copy"},null,-1),F=s("span",{class:"lang"},"console",-1),I={class:"shiki slack-dark vp-code-dark"},N={class:"line"},Q={style:{color:"#E6E6E6"}},q={class:"shiki slack-ochin vp-code-light"},z={class:"line"},J={style:{color:"#002339"}},L={class:"language-console vp-adaptive-theme"},O=s("button",{title:"Copy Code",class:"copy"},null,-1),X=s("span",{class:"lang"},"console",-1),M={class:"shiki slack-dark vp-code-dark"},U={class:"line"},W={style:{color:"#E6E6E6"}},G={class:"shiki slack-ochin vp-code-light"},H={class:"line"},K={style:{color:"#002339"}},Y=l(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Section</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/section&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Row</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/row&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Column</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/column&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Section</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">A</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">B</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">C</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Section</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Section</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/section&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Row</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/row&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Column</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/column&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Section</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">        &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;A&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">        &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;B&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">        &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;C&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Section</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;table&#39;&gt;</code>.</p>`,5);function Z(n,ss,ns,as,os,ls){return e(),p("div",null,[s("h2",r,[o(a(n.$frontmatter.title)+" ",1),i]),s("p",null,a(n.$frontmatter.description),1),y,d,s("div",E,[m,s("div",_,[s("div",h,[C,g,s("pre",u,[s("code",null,[s("span",f,[s("span",B,"pnpm add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])]),s("pre",k,[s("code",null,[s("span",b,[s("span",v,"pnpm add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])])]),s("div",D,[w,$,s("pre",j,[s("code",null,[s("span",R,[s("span",S,"bun add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])]),s("pre",x,[s("code",null,[s("span",A,[s("span",P,"bun add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])])]),s("div",T,[V,F,s("pre",I,[s("code",null,[s("span",N,[s("span",Q,"npm add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])]),s("pre",q,[s("code",null,[s("span",z,[s("span",J,"npm add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])])]),s("div",L,[O,X,s("pre",M,[s("code",null,[s("span",U,[s("span",W,"yarn add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])]),s("pre",G,[s("code",null,[s("span",H,[s("span",K,"yarn add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])])])])]),Y])}const ps=t(c,[["render",Z]]);export{es as __pageData,ps as default};