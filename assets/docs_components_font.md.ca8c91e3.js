import{_ as p,o as t,c as e,k as s,a as o,t as n,Q as l}from"./chunks/framework.fd95ed2e.js";const ps=JSON.parse('{"title":"Font","description":"Sets up custom fonts for use in email","frontmatter":{"title":"Font","description":"Sets up custom fonts for use in email","slug":"font","type":"component","head":[["meta",{"name":"og:description","content":"Sets up custom fonts for use in email"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Font"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"Sets up custom fonts for use in email"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Font"}]]},"headers":[],"relativePath":"../../../docs/components/font.md","filePath":"../../../docs/components/font.md"}'),c={name:"../../../docs/components/font.md"},r={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),i=s("h2",{id:"install",tabindex:"-1"},[o("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),E={class:"vp-code-group vp-adaptive-theme"},d=l('<div class="tabs"><input type="radio" name="group-m4rDc" id="tab-72Gmjk9" checked="checked"><label for="tab-72Gmjk9">pnpm</label><input type="radio" name="group-m4rDc" id="tab-JWIhCOM"><label for="tab-JWIhCOM">bun</label><input type="radio" name="group-m4rDc" id="tab-P-ah-CJ"><label for="tab-P-ah-CJ">npm</label><input type="radio" name="group-m4rDc" id="tab-qFuUl6-"><label for="tab-qFuUl6-">yarn</label></div>',1),m={class:"blocks"},D={class:"language-console vp-adaptive-theme active"},h=s("button",{title:"Copy Code",class:"copy"},null,-1),C=s("span",{class:"lang"},"console",-1),f={class:"shiki slack-dark vp-code-dark"},u={class:"line"},F={style:{color:"#E6E6E6"}},g={class:"shiki slack-ochin vp-code-light"},_={class:"line"},k={style:{color:"#002339"}},b={class:"language-console vp-adaptive-theme"},v=s("button",{title:"Copy Code",class:"copy"},null,-1),B=s("span",{class:"lang"},"console",-1),w={class:"shiki slack-dark vp-code-dark"},A={class:"line"},q={style:{color:"#E6E6E6"}},S={class:"shiki slack-ochin vp-code-light"},$={class:"line"},T={style:{color:"#002339"}},j={class:"language-console vp-adaptive-theme"},P=s("button",{title:"Copy Code",class:"copy"},null,-1),x=s("span",{class:"lang"},"console",-1),H={class:"shiki slack-dark vp-code-dark"},W={class:"line"},I={style:{color:"#E6E6E6"}},N={class:"shiki slack-ochin vp-code-light"},V={class:"line"},K={style:{color:"#002339"}},J={class:"language-console vp-adaptive-theme"},U=s("button",{title:"Copy Code",class:"copy"},null,-1),O=s("span",{class:"lang"},"console",-1),M={class:"shiki slack-dark vp-code-dark"},R={class:"line"},G={style:{color:"#E6E6E6"}},Q={class:"shiki slack-ochin vp-code-light"},X={class:"line"},z={style:{color:"#002339"}},L=l(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. This applies your font to all tags inside your email. Note, that not all email clients supports web fonts, this is why it is important to configure your <code>fallbackFontFamily</code>. To view all email clients that supports web fonts <a href="https://www.caniemail.com/features/css-at-font-face/" target="_blank" rel="noreferrer">see</a></p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Html</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/html&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Head</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/head&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Font</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/font&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Html</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;en&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Font</span></span>
<span class="line"><span style="color:#E6E6E6;">          </span><span style="color:#9CDCFE;">fontFamily</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;Roboto&quot;</span></span>
<span class="line"><span style="color:#E6E6E6;">          </span><span style="color:#9CDCFE;">fallbackFontFamily</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;Verdana&quot;</span></span>
<span class="line"><span style="color:#E6E6E6;">          </span><span style="color:#9CDCFE;">webFont</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">url:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">format:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;woff2&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span><span style="color:#569CD6;">}</span></span>
<span class="line"><span style="color:#E6E6E6;">          </span><span style="color:#9CDCFE;">fontWeight</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#B5CEA8;">400</span><span style="color:#569CD6;">}</span></span>
<span class="line"><span style="color:#E6E6E6;">          </span><span style="color:#9CDCFE;">fontStyle</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;normal&quot;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#808080;">/&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Html</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Html</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/html&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Head</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/head&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Font</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/font&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Html</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">lang</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;en&quot;</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Head</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">        &lt;</span><span style="color:#DC3EB7;">Font</span></span>
<span class="line"><span style="color:#002339;">          </span><span style="color:#DF8618;font-style:italic;">fontFamily</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;Roboto&quot;</span></span>
<span class="line"><span style="color:#002339;">          </span><span style="color:#DF8618;font-style:italic;">fallbackFontFamily</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;Verdana&quot;</span></span>
<span class="line"><span style="color:#002339;">          </span><span style="color:#DF8618;font-style:italic;">webFont</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{</span></span>
<span class="line"><span style="color:#002339;">            url: </span><span style="color:#A44185;">&#39;https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2&#39;</span><span style="color:#002339;">,</span></span>
<span class="line"><span style="color:#002339;">            format: </span><span style="color:#A44185;">&#39;woff2&#39;</span></span>
<span class="line"><span style="color:#002339;">          }}</span></span>
<span class="line"><span style="color:#002339;">          </span><span style="color:#DF8618;font-style:italic;">fontWeight</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{</span><span style="color:#174781;">400</span><span style="color:#002339;">}</span></span>
<span class="line"><span style="color:#002339;">          </span><span style="color:#DF8618;font-style:italic;">fontStyle</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;normal&quot;</span></span>
<span class="line"><span style="color:#002339;">        /&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Head</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Html</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#E6E6E6;"> </span><span style="color:#569CD6;">interface</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">FontProps</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#9CDCFE;">fallbackFontFamily</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">FallbackFont</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">|</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">FallbackFont</span><span style="color:#E6E6E6;">[];</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#9CDCFE;">fontFamily</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#9CDCFE;">fontStyle</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">FontStyle</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#9CDCFE;">fontWeight</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">FontWeight</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#9CDCFE;">webFont</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#9CDCFE;">format</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">FontFormat</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">  };</span></span>
<span class="line"><span style="color:#E6E6E6;">}</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">export</span><span style="color:#002339;"> </span><span style="color:#0991B6;">interface</span><span style="color:#002339;"> </span><span style="color:#0444AC;">FontProps</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#2F86D2;">fallbackFontFamily</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#0444AC;">FallbackFont</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">|</span><span style="color:#002339;"> </span><span style="color:#0444AC;">FallbackFont</span><span style="color:#002339;">[];</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#2F86D2;">fontFamily</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#2F86D2;">fontStyle</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#0444AC;">FontStyle</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#2F86D2;">fontWeight</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#0444AC;">FontWeight</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#2F86D2;">webFont</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#2F86D2;">format</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#0444AC;">FontFormat</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#2F86D2;">url</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#DC3EB7;">string</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  };</span></span>
<span class="line"><span style="color:#002339;">}</span></span></code></pre></div><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">fallbackFontFamily: </span><span style="color:#9CDCFE;">FallbackFont</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">|</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">FallbackFont</span><span style="color:#E6E6E6;">[];</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">fallbackFontFamily: </span><span style="color:#2F86D2;">FallbackFont</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">|</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">FallbackFont</span><span style="color:#002339;">[];</span></span></code></pre></div><p>The fallback font family the system should you, if web fonts are not supported or the chosen font is not installed on the system.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">fontFamily: </span><span style="color:#9CDCFE;">string</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">fontFamily: </span><span style="color:#2F86D2;">string</span><span style="color:#002339;">;</span></span></code></pre></div><p>The font family you want to use. If the webFont property is configured, this should contain the name of that font. Note: Do not insert multiple fonts here, use <code>fallbackFontFamily</code> for that_</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">fontStyle</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">FontStyle</span><span style="color:#E6E6E6;">;</span><span style="color:#CE9178;">\`</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">fontStyle</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">FontStyle</span><span style="color:#002339;">;</span><span style="color:#A44185;">\`</span></span></code></pre></div><p>Default: <code>&#39;normal&#39;</code><br></p><p>The style of the font.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">fontWeight</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">FontWeight</span><span style="color:#E6E6E6;">;</span><span style="color:#CE9178;">\`</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">fontWeight</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">FontWeight</span><span style="color:#002339;">;</span><span style="color:#A44185;">\`</span></span></code></pre></div><p>Default: <code>400</code><br></p><p>The weight of the font.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">webFont</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#9CDCFE;">format:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">FontFormat</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#9CDCFE;">url</span><span style="color:#E6E6E6;">: </span><span style="color:#9CDCFE;">string</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">}</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">webFont</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  format: </span><span style="color:#2F86D2;">FontFormat</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#2F86D2;">url</span><span style="color:#002339;">: </span><span style="color:#2F86D2;">string</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span></code></pre></div><p>The webFont the supported email client should use. <em>Note: Not all clients support web fonts. For support check: <a href="https://www.caniemail.com/features/css-at-font-face" target="_blank" rel="noreferrer">https://www.caniemail.com/features/css-at-font-face</a></em></p>`,18);function Y(a,Z,ss,as,ns,os){return t(),e("div",null,[s("h2",r,[o(n(a.$frontmatter.title)+" ",1),y]),s("p",null,n(a.$frontmatter.description),1),i,s("p",null,"Install the "+n(a.$frontmatter.type)+" from your command line",1),s("div",E,[d,s("div",m,[s("div",D,[h,C,s("pre",f,[s("code",null,[s("span",u,[s("span",F,"pnpm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",g,[s("code",null,[s("span",_,[s("span",k,"pnpm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])]),s("div",b,[v,B,s("pre",w,[s("code",null,[s("span",A,[s("span",q,"bun add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",S,[s("code",null,[s("span",$,[s("span",T,"bun add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])]),s("div",j,[P,x,s("pre",H,[s("code",null,[s("span",W,[s("span",I,"npm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",N,[s("code",null,[s("span",V,[s("span",K,"npm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])]),s("div",J,[U,O,s("pre",M,[s("code",null,[s("span",R,[s("span",G,"yarn add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",Q,[s("code",null,[s("span",X,[s("span",z,"yarn add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])])])]),L])}const ts=p(c,[["render",Y]]);export{ps as __pageData,ts as default};