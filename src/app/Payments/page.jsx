
import SubscriptionCard from "@/Components/SubscriptionCard";
import BasicLayout from "@/Layouts/BasicLayout";

const Subscription = ({ auth, }) => {

    //make plans array
    const plans = [
        {
            id: 1,
            name: "Basic",
            price: 50000,
            active_period_in_months: 1,
            features: JSON.stringify([
                "Unlimited Access",
                "Full HD Quality",
                "No Ads",
            ]),
        },
        {
            id: 2,
            name: "Premium",
            price: 100000,
            active_period_in_months: 1,
            features: JSON.stringify([
                "Unlimited Access",
                "Full HD Quality",
                "No Ads",
                "Download",
            ]),
        },
    ];


    return (
        <BasicLayout pageName={"Subscribe"} auth={auth} link={'/Payments'} anak={            <div className="min-h-screen">
        <div className="py-20 lg:py-10 lg:pb-32 flex flex-col items-center">
            <div className="text-green-500 font-semibold text-[26px] mb-3">
                Subscribe To Premium
            </div>
            <p className="text-base text-white leading-7 max-w-[302px] text-center">
                Enjoy watching Full-HD animes, without restriction and
                without ads
            </p>

            {/* <!-- Pricing Card --> */}
            <div className="md:flex justify-center gap-10 mt-5 md:mt-[70px]">
                {/* <!-- Basic --> */}
                {plans.map((plan) => (
                    <SubscriptionCard
                        name={plan.name}
                        price={plan.price}
                        durationInMonth={plan.active_period_in_months}
                        features={JSON.parse(plan.features)}
                        isPremium={plan.name === "Premium"}
                        key={plan.id}
                        onSelectSubscription={() => selectSubscription(plan.id)}
                    />
                ))}
            </div>
            {/* <!-- /Pricing Card --> */}
        </div>
    </div>}>

        </BasicLayout>
    );
};

export default Subscription;