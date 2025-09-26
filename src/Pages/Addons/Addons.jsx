import {useState} from "react";
import Layout from "../../Layout";
import AccordionItem from "../../Components/Addons/AccordionItem";

const data = [
    {
        label: "Auto backup in Tally",
        description:
            "This feature allows the user to safeguard their company data. The Automated Backup or Auto Backup is a capability that automatically takes data backup in the background without any disturbance or affecting your work.",
    },
    {
        label: "Alert System",
        description: "Auto Mail while voucher saving & Outstanding Mail.",
    },
    {
        label: "Address Book",
        description:
            "The data being generated is high, making it crucial for us to understand that data and use it for our benefit. In this add-on, one can see complete details of Ledger Master like Name, Address, Contact, Mobile, Email, State, GSTIN No, Credit Limit, in a single glance.",
    },
    {
        label: "Ledger & Item Deactive",
        description:
            "With this Tally add-on, you can simply disable inactive Ledgers and Item masters which you don’t want to show in new voucher entries but continue to be visible in reports and old vouchers.",
    },
    {
        label: "Voucher Approval",
        description:
            "This Add-on allows an administrator to authorize a specific user to act as an authorizer for selected voucher type entries made by other users. Until the authorizer checks and authorizes the entries, they remain unaffected in the accounts.",
    },
    {
        label: "Invoice Management",
        description: [
            "Print Grid Line in Invoice",
            "Print Multi Vouchers within Voucher Number range",
            "Print Previous Balance In Invoice",
            "Print Stock Group wise Invoice Print",
            "Print User Name in Reports, Print User Name In Vouchers",
        ],
    },
    {
        label: "Document Management System",
        description:
            "This add-on allows the user to attach relevant documents for any Voucher. Users can assign documents for Ledger and Stock Item as well. The documents can be viewed directly from Tally Software from Ledger Report, Voucher Screen, or Master Screen.",
    },
    {
        label: "Gridlines in Tally",
        description:
            "Now print Grid Lines in Tally Reports and invoices using this easy tally add-on. Compatible with both TallyPrime and Tally.ERP9. This add-on is useful to add horizontal gridlines in Tally Reports, improving readability on screen and on paper.",
    },
    {
        label: "Negative stock",
        description:
            "Negative inventory occurs when a manufacturer’s inventory count suggests that inventory is below zero. There could be several reasons for negative stock. Regardless of why, it’s a widespread problem in the manufacturing industry, and some companies even use it as a business practice.",
    },
    {
        label: "Recycle Bin in Tally",
        description:
            "Recycle bin allows you to retrieve records that you may have accidentally deleted in Tally Accounting Software. It is similar to Windows Recycle Bin, which allows you to recover deleted files. This tool is completely free and can be used without any restrictions.",
    },
    {
        label: "Control System Management",
        description:
            "Control system management in TallyPrime refers to a suite of features for managing user access, security, and cost control within the software to protect data and improve efficiency.",
    },
    {
        label: "Digital signature in Tally",
        description:
            "The facility of digital signature in TallyPrime helps you digitally sign and authenticate your documents with great ease. It secures your documents from tampering, impersonation, and repudiation.",
    },
];

const Addons = () => {
    const [activeIndices, setActiveIndices] = useState(new Set());

    const toggleAccordion = (index) => {
        setActiveIndices((prev) => {
            const newIndices = new Set(prev);
            if (newIndices.has(index)) {
                newIndices.delete(index);
            } else {
                newIndices.add(index);
            }
            return newIndices;
        });
    };

    return (
        <Layout>
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="">
                    <h3 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight">Tally Add-ons</h3>
                    <p className="mb-12 text-lg md:text-2xl text-gray-500 leading-relaxed max-w-4xl">
                        Supercharge your Tally experience with these powerful add-ons, designed to enhance productivity,
                        streamline workflows, and customize your accounting processes to fit your unique needs.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6">
                    {data.map((item, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0">
                            <AccordionItem
                                item={item}
                                index={index}
                                isActive={activeIndices.has(index)}
                                toggleAccordion={toggleAccordion}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                .accordion-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease-in-out;
                }
                .accordion-content.open {
                    max-height: 600px; /* Adjust based on content size */
                }
            `}</style>
        </Layout>
    );
};

export default Addons;
