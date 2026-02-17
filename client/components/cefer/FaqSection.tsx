import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
    return (
        <section className="w-full py-24 px-4 bg-white">
            <div className="max-w-[800px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
                    Frequently <span className="text-gradient-cefer">Asked Questions</span>
                </h2>

                <Accordion.Root type="single" collapsible className="space-y-4">
                    <Accordion.Item value="item-1" className="border border-neutral-200 rounded-lg overflow-hidden">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full p-4 md:p-6 text-left font-semibold text-cefer-black hover:bg-neutral-50 transition-colors data-[state=open]:bg-neutral-50 group">
                                What makes Cefer different from other data providers?
                                <ChevronDown className="w-5 h-5 text-neutral-400 group-data-[state=open]:rotate-180 transition-transform" />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="p-4 md:p-6 pt-0 text-neutral-600 bg-neutral-50">
                            Cefer uses a unique 3-layer validation process that combines AI verification, social signal checks, and real-time SMTP testing to ensure 99% data accuracy. We don't just scrape; we verify.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="item-2" className="border border-neutral-200 rounded-lg overflow-hidden">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full p-4 md:p-6 text-left font-semibold text-cefer-black hover:bg-neutral-50 transition-colors data-[state=open]:bg-neutral-50 group">
                                Is there a free trial available?
                                <ChevronDown className="w-5 h-5 text-neutral-400 group-data-[state=open]:rotate-180 transition-transform" />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="p-4 md:p-6 pt-0 text-neutral-600 bg-neutral-50">
                            Yes! You can start for free with 25 credits. No credit card required. This allows you to test our data accuracy and platform features before committing to a plan.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="item-3" className="border border-neutral-200 rounded-lg overflow-hidden">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full p-4 md:p-6 text-left font-semibold text-cefer-black hover:bg-neutral-50 transition-colors data-[state=open]:bg-neutral-50 group">
                                Does Cefer integrate with my CRM?
                                <ChevronDown className="w-5 h-5 text-neutral-400 group-data-[state=open]:rotate-180 transition-transform" />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="p-4 md:p-6 pt-0 text-neutral-600 bg-neutral-50">
                            Absolutely. We offer native integrations with Salesforce, HubSpot, Pipedrive, and Zapier, making it easy to push verified contacts directly into your existing workflow.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="item-4" className="border border-neutral-200 rounded-lg overflow-hidden">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full p-4 md:p-6 text-left font-semibold text-cefer-black hover:bg-neutral-50 transition-colors data-[state=open]:bg-neutral-50 group">
                                Is Cefer GDPR and CCPA compliant?
                                <ChevronDown className="w-5 h-5 text-neutral-400 group-data-[state=open]:rotate-180 transition-transform" />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="p-4 md:p-6 pt-0 text-neutral-600 bg-neutral-50">
                            Yes, data privacy is our priority. We are fully compliant with GDPR and CCPA regulations. We only collect business data and ensure all processing meets strict legal standards.
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </div>
        </section>
    );
}
