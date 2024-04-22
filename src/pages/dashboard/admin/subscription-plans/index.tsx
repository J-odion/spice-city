import React, { useState } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import EditModal from '@/components/modal/subscription/EditModal';



const subscriptionPlans = [
  {
      id: 1,
      name: '1 Month',
      price: '3,550',
      description: [
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
      ],
      image: '/images/blob-music.svg'
  },
  {
      id: 2,
      name: '3 Month',
      price: '10,000',
      description: [
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
      ],
      image: '/images/blob-music-purple.svg'
  },
  {
      id: 3,
      name: '6 Month',
      price: '18,000',
      description: [
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
      ],
      image: '/images/blob-music-purple.svg'
  },
  {
      id: 4,
      name: '12 Month',
      price: '30,000',
      description: [
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
      ],
      image: '/images/blob-music-purple.svg'
  },
]




const SubscriptionPlans: NextPageWithLayout = () => {

  const [editModal, setEditModal] = useState<boolean>(false);

    const handleEditModal = () => setEditModal(!editModal);

  return (
    <DashboardSidebar>
      <div className="w-full mt-10 px-8">
        <h1 className="text-2xl font-semibold py-8">Subscription Plans</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {subscriptionPlans.map((plan) => (
          <div key={plan.id} className="bg-white shadow-md p-4 rounded-md border-brown flex flex-col gap-4 border-2 relative">
            <img src={plan.image} alt="music" className="absolute top-0 right-0 w-[220px] h-[220px] overflow-hidden" />
            <p className="text-medium font-md text-[#895543] uppercase">{plan.name} plan</p>
            <h2 className="font-bold text-2xl mt-2 text-[#D06B0D]">₦{plan.price}</h2>
            <ul className="my-8 flex flex-col gap-4">
              {plan.description.map((desc, index) => (
                <li key={index} className="text-gray-500 text-sm inline-flex items-center gap-6">
                  <span><img src="/images/guitar.svg" alt="guitar" /></span>{desc}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <Button className='bg-[#A85334] w-full' onClick={handleEditModal}>Edit</Button>
              <Button variant="link" className="ml-2">
                <Trash size={20} color='#A85334' className='' />
              </Button>
            </div>
          </div>
        ))}
        </div>
      </div>

      <EditModal
        title='Edit plan'
        open={editModal}
        setOpen={setEditModal}
       />
    </DashboardSidebar>
  )
}

export default SubscriptionPlans

SubscriptionPlans.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"subscription-plans"} >{page}</DashboardLayout>;
};
