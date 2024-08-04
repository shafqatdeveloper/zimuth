import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="w-full h-full flex justify-center text-darkBlack bg-darkWhite dark:text-white dark:bg-darkBlack">
      <div className="w-4/5 py-28">
        {/* Heading */}
        <div className="">
          <h1 className="text-xl font-bold tracking-wide font-sans">
            Terms and Conditions
          </h1>
        </div>
        {/* Terms and Conditions */}
        <div className="flex flex-col gap-12 pt-10 text-pretty">
          {/* Condtion 1 */}
          <div className="">
            <h1 className="font-semibold">1. Definitions</h1>
            <p>
              "Searcher": Refers to the company providing AI-powered search
              services.
            </p>
            <p>
              "User": Refers to any individual or entity using the services
              provided by Searcher.
            </p>
            <p>
              "Services": Refers to all products and services offered by
              Searcher, including but not limited to search functionalities,
              AI-generated summaries, and analytic features.
            </p>
          </div>
          {/* Condtion 2 */}
          <div className="">
            <h1 className="font-semibold">2. User Accounts</h1>
            <p>
              Users must create an account to access certain features of the
              Services
            </p>
            <p>
              Users are responsible for maintaining the confidentiality of their
              account information, including their password.
            </p>
            <p>
              Users must notify Searcher immediately of any unauthorized use of
              their account.
            </p>
          </div>
          {/* Condtion 3 */}
          <div className="">
            <h1 className="font-semibold">3. Use of Services</h1>
            <p>Users agree to use the Services only for lawful purposes.</p>
            <p>
              Users must not use the Services to transmit any material that is
              unlawful, harmful, threatening, abusive, harassing, defamatory,
              vulgar, obscene, or otherwise objectionable.
            </p>
            <p>
              Users must not interfere with or disrupt the Services or servers
              or networks connected to the Services.
            </p>
          </div>
          {/* Condtion 4 */}
          <div className="">
            <h1 className="font-semibold">4. Intellectual Property</h1>
            <p>
              The Services and its original content, features, and functionality
              are and will remain the exclusive property of Searcher and its
              licensors.
            </p>
            <p>
              Users are granted a limited license to access and use the Services
              for personal or business purposes as outlined in their
              subscription plan.
            </p>
          </div>
          {/* Condtion 5 */}
          <div className="">
            <h1 className="font-semibold">5. Subscription Plans and Payment</h1>
            <p>
              Searcher offers multiple subscription plans (Zimuth LITE, Zimuth,
              Zimuth Edu, Zimuth Pro) with varying features and pricing.
            </p>
            <p>
              Users agree to pay all applicable fees associated with their
              chosen subscription plan
            </p>
            <p>
              Subscription fees are billed monthly and are non-refundable except
              as required by law.
            </p>
          </div>
          {/* Condtion 6 */}
          <div className="">
            <h1 className="font-semibold">6. Data and Privacy</h1>
            <p>
              Searcher respects the privacy of its users and is committed to
              protecting it.
            </p>
            <p>
              Users agree to Searcher's Privacy Policy, which describes how
              personal data is collected, used, and shared.
            </p>
            <p>
              Users grant Searcher the right to use anonymized data for the
              purpose of improving the Services.
            </p>
          </div>
          {/* Condtion 7 */}
          <div className="">
            <h1 className="font-semibold">7. Limitation of Liability</h1>
            <p>
              The Services are provided "as is" and "as available" without any
              warranties of any kind, either express or implied.
            </p>
            <p>
              Searcher does not warrant that the Services will be uninterrupted
              or error-free.
            </p>
            <p>
              In no event shall Searcher be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or
              related to the use of the Services.
            </p>
          </div>
          {/* Condtion 8 */}
          <div className="">
            <h1 className="font-semibold">8. Changes to the Terms</h1>
            <p>
              Searcher reserves the right to modify these terms and conditions
              at any time.
            </p>
            <p>
              Users will be notified of any changes to the terms and conditions
              and will be required to accept the new terms to continue using the
              Services.
            </p>
          </div>
          {/* Condtion 9 */}
          <div className="">
            <h1 className="font-semibold">9. Governing Law</h1>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which Searcher
              operates.
            </p>
            <p>
              Any disputes arising out of or related to these terms and
              conditions will be subject to the exclusive jurisdiction of the
              courts in that jurisdiction.
            </p>
          </div>
          {/* Condtion 10 */}
          <div className="">
            <h1 className="font-semibold">10. Contact Information</h1>
            <p>
              For any questions about these terms and conditions, please contact
              Searcher at{" "}
              <Link to={"contact@searcherai.net"}>
                [contact@searcherai.net]
              </Link>
              .
            </p>
          </div>
          <div className="pt-5">
            <p>
              Terms and Conditions to be finalized along with the technical
              model. By using Searcher's services, you acknowledge that you have
              read, understood, and agree to be bound by these terms and
              conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
