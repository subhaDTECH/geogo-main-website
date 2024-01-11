import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const WeAerAgilePage = () => {
  return (
    <Layout>
      <div className="weareagile-Section my-[100px] sm:my-[180px]">
        <div className="container h-full mx-auto w-[95%]  m-3 my-10 p-10 bg-white">
          <div className="py-6">
            <h2 className="text-4xl md:text-6xl font-semibold p-5">
              We are Agile
            </h2>
          </div>

          <div className="flex  flex-col md:flex-row justify-center py-10">
            <div className="title-container w-full  md:w-1/2 p-5">
              <h2 className="text-3xl md:text-4xl font-semibold md:p-3">
                What is Agile ?
              </h2>
            </div>
            <div className="content-box w-full md:w-1/2  mx-auto p-5 text-start">
              <p className="text-[18px]">
                Agile means to move quickly but with ease.
              </p>
              <p className="text-[18px]">
                Agile is a set of principles or methodologies that aims to
                maximise efficiency and minimise wastage in a process. It adopts
                well in the process of software development and maintenance.
              </p>
              <p className="text-[18px]">
                Agile as a software project management process is highly adopted
                across organisations globally owing to its simplicity and
                effectiveness.
              </p>
            </div>
          </div>

          <div className="flex  flex-col md:flex-row justify-center py-10">
            <div className="title-container w-full  md:w-1/2 p-5">
              <h2 className="text-2xl md:text-4xl font-semibold md:p-3">
                Why are we Agile ?
              </h2>
            </div>
            <div className="content-box w-full md:w-1/2  mx-auto p-5">
              <p className="text-[18px]">
                Two decades ago software release cycles were measured in years.
                Today it has been reduced to days for some software
                applications. Over a staggered approach of designing, building,
                qualifying and releasing a software spread across multiple
                teams, today it is much more continuous delivered by a minuscule
                fraction of the team size.
              </p>
              <p className="text-[18px]">
                Today business is speed and speed means business. But with speed
                comes the evils of missed quality, shortcuts and burn-out.
              </p>
              <p className="text-[18px]">
                Agile processes bring the balance of both -{" "}
                <strong>speed but with ease</strong>. We are firm believers of{" "}
                <strong>Kaizen</strong> - The art of continuous improvement.
              </p>
              <p className="text-[18px]">
                To cater to today's business and help our clients stay ahead, we
                are Agile.
              </p>
              <p className="text-[18px]">
                To keep our team ahead with the fast changing technologies, we
                are Agile.
              </p>
              <p className="text-[18px]">To keep GEOGO going, we are Agile.</p>
              <p className="text-[18px]">
                Agility is in our emblem, agility is on our heart.
              </p>
            </div>
          </div>

          <div className="flex  flex-col md:flex-row justify-center py-10">
            <div className="title-container w-full  md:w-1/2 p-5">
              <h2 className="text-2xl md:text-4xl font-semibold md:p-3">
                Our process
              </h2>
            </div>
            <div className="content-box w-full md:w-1/2  mx-auto p-5">
              <p className="text-[18px]">
                We follow a simple cycle of <strong>Aware-Act-Adapt</strong> in
                all our activity.
              </p>
              <p className="text-[18px]">
                We believe awareness is the key to mindful actions. The path to
                knowledge and change starts from awareness. Be it our next
                project or staff appraisal, we take extra care to make ourselves
                aware of the need, problems, the goals. We keep ourselves
                continuously aware of the recent developments of tools &
                technologies we use, industry practices and processes.
              </p>
              <p className="text-[18px]">
                Right awareness actually helps us in judging for right actions -
                be it deciding on the right technology or the building something
                relevant which the client did not ask for.
              </p>
              <p className="text-[18px]">
                But, it is not that we do not fail. Actually we fail a lot, but
                we try to fail as early as possible. Hence, we do the inspection
                of what we build in shorter cycles, identify the root causes and
                make course correction before starting back again. Adaptation is
                the key activity of our Agile process. GEOGO culture charter
                reads - Fail fast, fail differently.
              </p>
            </div>
          </div>

          <div className="flex  flex-col md:flex-row justify-center py-10">
            <div className="title-container w-full  md:w-1/2 p-5">
              <h2 className="text-2xl md:text-4xl font-semibold md:p-3">
                What are the benefits ?
              </h2>
            </div>
            <div className="content-box w-full md:w-1/2  mx-auto p-5">
              <p className="text-[18px]">
                The immediate benefit of Agile is the enhancement of efficiency
                & productivity. But, over the prolonged practice of Agile, we
                have found immense benefits in certain intangible quarters of
                business.
              </p>
              <p className="text-[18px]">
                Agility fosters a culture of Collaboration & Ownership. It helps
                immensely in building a high-performance team. We take pride in
                our GEOGO Team which both high in commitment and competence,
                always.
              </p>
              <p className="text-[18px]">
                Our continuous improvement mantra guides us to build softwares
                with higher quality, innovate to do things better way & keep
                going the extra mile.
              </p>
              <p className="text-[18px]">
                Our process bolsters transparency and openness. This builds
                trust at an all-new level - for us, our partners and our
                clients.
              </p>
              <p className="text-[18px]">
                Come, explore this experience in your next project with us, the
                GEOGO way !!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="we are agile" />

export default WeAerAgilePage
