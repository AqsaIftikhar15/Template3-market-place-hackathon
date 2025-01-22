import React from 'react';

const HelpPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-5">
            {/* Title Section */}
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">GET HELP</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="What can we help you with?"
                className="w-full p-3 border border-gray-300 rounded mb-5 text-sm sm:text-base"
            />

            {/* Payment Options Section */}
            <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                <p className="mb-4 text-sm sm:text-base">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
                    <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                    <li>If you enter your PAN information at checkout, you’ll be able to pay for your order with PayTM or a local credit or debit card.</li>
                    <li>Apple Pay</li>
                </ul>
                <p className="mb-4 text-sm sm:text-base">
                    Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member,{' '}
                    <a href="#" className="text-blue-500 underline">join us</a> today.
                </p>
            </section>

            {/* FAQs Section */}
            <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">FAQs</h2>
                <ul className="list-decimal list-inside mb-4 text-sm sm:text-base">
                    <li>
                        <strong>Does my card need international purchases enabled?</strong>
                        <p className="ml-4">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                        <p className="ml-4">Please note, some banks may charge a <a href="#" className="text-blue-500 underline">small transaction fee</a> for international orders.</p>
                    </li>
                    <li>
                        <strong>Can I pay for my order with multiple methods?</strong>
                        <p className="ml-4">No, payment for Nike orders can’t be split between multiple payment methods.</p>
                    </li>
                    <li>
                        <strong>What payment method is accepted for SNKRS orders?</strong>
                        <p className="ml-4">You can use any accepted credit card to pay for your SNKRS order.</p>
                    </li>
                    <li>
                        <strong>Why don’t I see Apple Pay as an option?</strong>
                        <p className="ml-4">To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you’ll need to use Safari to use Apple Pay on Nike.com.</p>
                    </li>
                </ul>
            </section>

            {/* Contact Us Section */}
            <section className="mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">CONTACT US</h2>
                <p className="text-sm sm:text-base">Phone: <strong>000 800 919 0566</strong></p>
                <p className="text-sm sm:text-base">Products & Orders: 24 hours a day, 7 days a week</p>
                <p className="text-sm sm:text-base">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                <p className="text-sm sm:text-base">We'll reply within five business days.</p>
            </section>

            {/* Store Locator Section */}
            <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">STORE LOCATOR</h2>
                <p className="text-sm sm:text-base">Find Nike retail stores near you.</p>
            </section>
        </div>
    );
};

export default HelpPage;
