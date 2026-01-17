import React, { useEffect } from 'react';
import './PrivacyPolicy.css'; // We'll create this next

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-policy-container">
            <div className="privacy-content">
                <header className="privacy-header">
                    <h1>PRIVACY NOTICE</h1>
                    <div className="policy-meta">
                        <p><strong>Last Updated:</strong> XX-XX-202X</p>
                        <p><strong>Version:</strong> 1.0</p>
                    </div>
                </header>

                <section>
                    <h2>Privacy Notice</h2>
                    <p>
                        Horsmen Consulting (“Horsmen,” “we,” “us,” or “our”) is a privacy-first software engineering partner for startups and growing companies, especially in SaaS, fintech, AI, and health-tech. We build products with security and data protection baked in, following both technical best practices and privacy laws. This Privacy Notice explains how we collect, use, share, and protect your personal information when you visit our website or use our services.
                    </p>
                    <p>
                        We comply with international privacy standards (for example, the EU’s GDPR, California’s CCPA, Saudi Arabia’s PDPL) and Indian laws (such as the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025). By adhering to these rules, we aim to earn and keep your trust in how we handle data.
                    </p>
                </section>

                <section>
                    <h2>Information We Collect</h2>
                    <p>We collect information that you provide to us or that we obtain automatically to deliver our services and improve your experience. The types of personal data we collect include:</p>

                    <h3>Personal Information</h3>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Data Collected</th>
                                    <th>Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name, Email Address, Phone Number, Company, and Job Title.</td>
                                    <td>Provided by you when you fill out a contact or lead form on our website, send us an email or message (e.g. on WhatsApp or LinkedIn), or otherwise reach out to us.</td>
                                </tr>
                                <tr>
                                    <td>Communications and Project Details</td>
                                    <td>Any information you voluntarily share with us, such as messages, preferences, or project requirements when you communicate with our team or use our services.</td>
                                </tr>
                                <tr>
                                    <td>Technical & Security Data (IP address, Device Type, Browser Type, Operating System, and Website Log Information.)</td>
                                    <td>Collected automatically via cookies and similar tracking technologies when you visit our website or use our online services.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Personal information does not include:</h3>
                    <p>Some information we process is not considered “personal data” under privacy laws. Examples include:</p>
                    <ul>
                        <li><strong>Public Data:</strong> Information you have made public yourself (for example, comments you post publicly on social media).</li>
                        <li><strong>Legally Required Public Data:</strong> Information that laws or regulations require us to publish (for example, business registration details).</li>
                        <li><strong>Personal/Household Data:</strong> Information you use purely for personal or family purposes.</li>
                        <li><strong>Offline Data:</strong> Personal data only collected in non-digital formats (paper records that we have not digitized).</li>
                        <li><strong>Anonymized Data:</strong> Data that has been stripped of identifiers so it cannot identify you.</li>
                    </ul>
                    <p>We treat non-personal and anonymous data appropriately and focus our protections on data that can identify you.</p>

                    <h3>Sensitive Personal Data</h3>
                    <p>We do not collect sensitive personal data such as health information, racial or ethnic origin, political opinions, religious beliefs, or precise financial account details, unless you give explicit consent for that specific purpose.</p>
                </section>

                <section>
                    <h2>How We Use Your Data</h2>
                    <p>We use your personal information only for clear, specific purposes related to our services and operations. These purposes include:</p>
                    <ul>
                        <li><strong>Responding to Inquiries:</strong> If you contact us (for example, by submitting a form or emailing us), we use your name and contact details to reply to you and follow up on your request or inquiry.</li>
                        <li><strong>Delivering Our Services:</strong> When we provide consulting or engineering services, we process relevant information to fulfill our contracts. For example, we use your contact and project details to schedule work, communicate with you, and complete the agreed services.</li>
                        <li><strong>Improving Our Website and Services:</strong> We use technical data (like usage patterns or error logs) to secure and optimize our website and applications. This helps us detect and fix issues, enhance performance, and offer a better user experience.</li>
                        <li><strong>Marketing and Communications (with your consent):</strong> If you have opted in, we may send you news, updates, or promotional materials about our services. We only do this with your permission and provide an easy way to unsubscribe. We will never send you marketing messages if you have not agreed to receive them.</li>
                    </ul>
                    <p>Every piece of data we collect has a legitimate purpose. We do not ask for unnecessary information, and we do not use your data in ways you would not expect or have not consented to.</p>
                </section>

                <section>
                    <h2>Legal Basis for Processing Personal Data</h2>
                    <p>We process personal data only when we have a lawful basis under applicable laws. The main legal bases we rely on include:</p>
                    <ul>
                        <li><strong>Consent:</strong> Whenever required, we obtain your explicit consent before collecting or using your data for a particular purpose (for example, marketing communications or certain features). You can give consent by checking a box, responding “Yes,” or another affirmative action. You may withdraw your consent at any time (see Your Privacy Rights below).</li>
                        <li><strong>Contractual Necessity:</strong> If we have an agreement with you (such as a service contract or a project engagement), we process the data necessary to fulfill that contract. This includes providing services, billing, and communicating with you about the project.</li>
                        <li><strong>Legal Obligation:</strong> We may process or disclose your data to comply with legal requirements, such as tax laws, regulatory audits, court orders, or government requests.</li>
                        <li><strong>Legitimate Interests:</strong> We may use your data for our legitimate business purposes – for example, improving our services, preventing fraud, or securing our systems – as long as those interests do not override your rights or expectations. We carefully assess and balance these interests to ensure fair and lawful processing.</li>
                    </ul>
                    <p>We will always inform you of our reasons for using your data and will not process your personal data in any manner that is incompatible with the purposes for which it was collected.</p>
                </section>

                <section>
                    <h2>Data Sharing & Third-Party Disclosures</h2>
                    <p><strong>Data Location:</strong> We primarily operate in India, and our servers and offices are located in India. Your data is stored on infrastructure in India and is subject to Indian privacy law (including the DPDP Act, 2023 and DPDPR 2025). Operating in India helps us protect your data under a consistent legal framework.</p>
                    <p><strong>International Transfers:</strong> Because we serve a global customer base, we acknowledge other privacy laws. Currently, we do not transfer personal data outside India. If in the future we need to transfer data internationally (for example, to support a global client or use an overseas vendor), we will implement appropriate safeguards such as standard contractual clauses or rely on legal frameworks approved by regulators. Any such transfer will comply with applicable laws (like GDPR rules for EU data or other international data transfer regulations).</p>
                    <p><strong>No Reliance on Current Transfer Mechanisms:</strong> As of now, we do not use international data transfer mechanisms, cloud regions outside India, or data centers abroad for storing personal data. If that changes, we will update this notice and ensure compliance.</p>
                </section>

                <section>
                    <h2>Your Rights</h2>
                    <p>Depending on where you live and which laws apply, you have certain rights regarding your personal data. These rights are designed to give you control over your information. Common rights include:</p>
                    <ul>
                        <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you and ask how we use it. We will provide a summary of the information we have collected.</li>
                        <li><strong>Right to Correction:</strong> If you believe any of your data is incomplete or inaccurate, you can ask us to correct or update it.</li>
                        <li><strong>Right to Deletion (Right to be Forgotten):</strong> You can ask us to delete your personal data when it is no longer needed for the purposes it was collected, or if you have withdrawn your consent and we have no other legal reason to keep it.</li>
                        <li><strong>Right to Withdraw Consent:</strong> If our processing is based on your consent, you can withdraw that consent at any time. After withdrawal, we will stop processing your data for that purpose, unless there is another lawful reason to continue.</li>
                        <li><strong>Right to Object or Restrict Processing:</strong> You may object to or request restriction of our processing of your data in certain situations (for example, if you think processing is unfair or unlawful, or if you have objections to direct marketing).</li>
                    </ul>
                    <p><strong>Other Rights:</strong> Additional rights may apply in certain jurisdictions. For example, European residents have rights under the GDPR such as data portability (receiving your data in a structured, machine-readable format) and the right to lodge a complaint with a supervisory authority. California residents have rights under the CCPA, such as the right to know what data is collected and the right to opt-out of data sales (though we do not sell data). Saudi Arabia’s PDPL provides similar rights to access, correct, and delete data. We will respect any rights granted by the applicable law in your situation.</p>
                    <p>We believe in being transparent and will make it easy for you to exercise these rights.</p>
                </section>

                <section>
                    <h2>How to Exercise Your Rights</h2>
                    <p>To exercise any of your data rights or to ask questions, please contact us:</p>
                    <address>
                        <strong>Email:</strong> <a href="mailto:connect@horsmen.com">connect@horsmen.com</a><br />
                        <strong>Subject Line:</strong> Use a clear subject like "Privacy Request" or "Data Access Request".
                    </address>
                    <ul>
                        <li><strong>Information to Provide:</strong> Include your full name, email or phone number, and a brief description of the right you wish to exercise (for example, “Request for my personal data” or “Please delete my data”).</li>
                        <li><strong>Identity Verification:</strong> For security, we may ask you to verify your identity before fulfilling certain requests. This helps protect your data from unauthorized requests.</li>
                        <li><strong>Consent Manager Platforms:</strong> If you gave consent through a third-party consent management platform, you may also adjust your preferences via that platform.</li>
                    </ul>
                    <p>We will respond to your request within the time frame required by law (for example, within 30 days for GDPR requests). If we need more time or cannot fulfill your request, we will explain why.</p>
                </section>

                <section>
                    <h2>Children’s Privacy</h2>
                    <p>Our services are intended for adult users. We do not knowingly collect or solicit personal information from anyone under the age of 18. If a parent or guardian believes that their minor child has provided us with personal data, please contact us. We will promptly delete any such information if we become aware of it.</p>
                </section>

                <section>
                    <h2>Cookies and Tracking Technologies</h2>
                    <p>We use cookies and similar tracking technologies on our website to ensure it functions properly and to help us understand how the site is used. Essential cookies (necessary for basic operations) are used without your consent. For non-essential cookies (such as analytics or marketing cookies), we will ask for your consent before placing them. You can control cookies through your browser settings or our cookie consent tool. For detailed information about the cookies we use and how, please see our Cookie Policy.</p>
                </section>

                <section>
                    <h2>Updates to This Policy</h2>
                    <p>We may update this Privacy Notice to reflect changes in our practices, technology, or legal requirements. When we make significant changes, we will notify you (for example, by posting a notice on our website or sending an email). The “Last Updated” date at the top of this page indicates the current version. We encourage you to review this notice periodically, so you are always aware of how we protect your data.</p>
                </section>

                <section>
                    <h2>Data Security and Retention</h2>
                    <p><strong>Data Security:</strong> We take data security very seriously. Horsmen maintains an information security program aligned with recognized standards (such as ISO 27001 for security and ISO 27701 for privacy). We implement technical and organizational measures to protect your data. For example, we encrypt data in transit and at rest, enforce strict access controls (role-based permissions and the principle of least privilege), conduct regular security audits, and continuously monitor our systems for anomalies. All employees and contractors undergo privacy and security training, and any third-party service providers are required to meet our security standards through contracts and assessments.</p>
                    <p><strong>Data Retention:</strong> We retain personal data only as long as needed to fulfill the purposes described above or to meet legal obligations. Once data is no longer necessary (for example, after a project ends or if you ask us to delete your data), we securely delete or anonymize it. However, we may retain certain information longer if required by law (for example, tax or record-keeping requirements) or if it is still necessary to resolve disputes or enforce our agreements.</p>
                    <p>If you have questions about our data security practices or retention periods, you may contact us at any time.</p>
                </section>

                <section className="contact-info">
                    <h2>Contact Information</h2>
                    <p>If you have any questions about this Privacy Notice or your personal data, you can reach our Data Protection Officer/Grievance Officer:</p>
                    <address>
                        <strong>Horsmen Consulting</strong><br />
                        <strong>Email:</strong> <a href="mailto:connect@horsmen.com">connect@horsmen.com</a>
                    </address>
                </section>

                <p className="agreement-text">By using Horsmen’s website or services, you confirm that you have read and understood this Privacy Notice and agree to our data practices. We value your trust and are committed to protecting your privacy at every step.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
