import React from "react";
import TosPara from "../components/tos/TosPara";

function tos() {
  return (
    <div className="py-2 mt-20 lg:py-5 px-2 md:px-10 lg:px-40">
      <h1 className="text-3xl text-black font-semibold mb-5 md:text-3xl">
        Altdeck&apos;s Terms of Service
      </h1>
      <p className="text-sm text-[#808080] mb-5">Last Update: 8 March, 2022</p>
      <div className="text-sm text-[#808080]">
        <TosPara
          titleNumber={"1"}
          title="Terms"
          desc="
				By accessing this AltDeck, accessible from altdeck.io, you are agreeing
				to be bound by these Website Terms and Conditions of Use and agree that
				you are responsible for the agreement with any applicable local laws. If
				you disagree with any of these terms, you are prohibited from accessing
				this site. The materials contained in this Website are protected by
				copyright and trade mark law."
        />
        <div>
          <p className="text-base text-sm font-bold text-black">
            <span className="text-[#50C9C3]">2. </span>
            Use License
          </p>
          <p className="leading-loose leading-6 mb-5">
            Permission is granted to temporarily download one copy of the
            materials on Company Names Website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul className="ml-5 mt-2">
            <li className="list-disc">Modify or copy the materials;</li>
            <li className="list-disc">
              Use the materials for any commercial purpose or for any public
              display;
            </li>
            <li className="list-disc">
              Attempt to reverse engineer any software contained on AltDeck;
            </li>
            <li className="list-disc">
              Remove any copyright or other proprietary notations from the
              materials;
            </li>
          </ul>

          <p className="leading-loose leading-6 mb-5 mt-5">
            or This will let AltDeck to terminate upon violations of any of
            these restrictions. Upon termination, your viewing right will also
            be terminated and you should destroy any downloaded materials in
            your possession whether it is printed or electronic format.
          </p>
        </div>
        <div>
          <TosPara
            titleNumber={"3"}
            title="Disclaimer"
            desc="
All the materials on AltDec are provided “as is”. AltDeck makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, AltDeck does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website. AltDeck makes no warranty that our website will be online uninterrupted. Furthermore AltDeck is not responsible for the following, this also implies creators:
"
          />
          <ul className="ml-5 mt-2">
            <li className="list-disc">server failure or data loss</li>
            <li className="list-disc">corrupted wallet files</li>
            <li className="list-disc">
              {" "}
              user errors such as forgotten passwords, mis typed passwords, mis
              typed addresses, failed transactions
            </li>
            <li className="list-disc"> unauthorized access to applications</li>
          </ul>
        </div>

        <div className="mt-5">
          <TosPara
            titleNumber={"4"}
            title="Limitations"
            desc="
AltDeck or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on AltDeck’s , even if AltDeck or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you"
          />
        </div>

        <div>
          <TosPara
            titleNumber={"5"}
            title="Launchpad & Collection Applications"
            desc="In order to list a collection either on the launchpad or marketplace you agree to the following terms:"
          />
          <ul className="ml-5 mt-2">
            <li className="list-disc">
              provide accurate information about the team member
            </li>
            <li className="list-disc">
              maintain and update information up to date
            </li>
            <li className="list-disc">
              immediately notify us when there’s a security breachs
            </li>
            <li className="list-disc">
              {" "}
              understand that information you provide about your team will be
              public{" "}
            </li>
          </ul>
        </div>

        <div className="mt-5">
          <TosPara
            titleNumber={"6"}
            title="Links"
            desc="AltDeck has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by AltDeck of the site. The use of any linked website is at the user's own risk."
          />
        </div>
        <TosPara
          titleNumber={"7"}
          title="Site Terms of Use Modifications"
          desc="AltDeck may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use."
        />
        <TosPara
          titleNumber={"8"}
          title="Governing Law"
          desc="Any claim related to AltDeck Website shall be governed by the laws of the United States without regards to its conflict of law provisions."
        />
      </div>
    </div>
  );
}

export default tos;
