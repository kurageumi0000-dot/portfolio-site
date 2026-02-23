export default function PrivacyPolicyPage() {
    return (
        <div className="pb-24 lg:pb-32">
            {/* Hero Section */}
            <div className="bg-slate-50 py-16 lg:py-24 border-b border-slate-100 mb-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 italic">
                        Privacy Policy<span className="text-accent-blue">.</span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-3xl">
                <article className="prose prose-slate prose-sm md:prose-base max-w-none 
                    prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-strong:text-slate-900 prose-li:text-slate-600">

                    <section>
                        <h2>1. 個人情報の利用目的</h2>
                        <p>
                            本サイトでは、お問い合わせフォームを通じて提供されたお名前、メールアドレス等の個人情報を、以下の目的で利用いたします。
                        </p>
                        <ul>
                            <li>お問い合わせに対する回答および資料の送付</li>
                            <li>ご依頼に関する連絡および業務遂行</li>
                            <li>その他、本人と合意した目的</li>
                        </ul>
                    </section>

                    <section>
                        <h2>2. 個人情報の第三者への開示・提供の禁止</h2>
                        <p>
                            提供いただいた個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                        </p>
                        <ul>
                            <li>本人の同意がある場合</li>
                            <li>法令に基づき開示することが必要である場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. 著作権について</h2>
                        <p>
                            本サイトに掲載されている全てのイラスト、画像、文章等の著作権は「海音くらげ」に帰属します。
                            <strong>無断での複写、保存、転載、AI学習への利用、商用利用は一切禁止しております。</strong>
                            個人での保存やSNSへの転載を希望される場合は、ガイドライン（創作・FAページ参照）を遵守してください。
                        </p>
                    </section>

                    <section>
                        <h2>4. 免責事項</h2>
                        <p>
                            本サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、内容を保証するものではありません。
                            本サイトをご利用になったことで生じたトラブルや損失において、一切の責任を負いかねますのでご了承ください。
                        </p>
                    </section>

                    <div className="mt-20 pt-8 border-t border-slate-100 text-slate-400 text-xs text-right">
                        制定日：2026年2月23日
                    </div>
                </article>
            </div>
        </div>
    );
}
