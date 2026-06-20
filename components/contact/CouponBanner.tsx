'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';
import { Suspense } from 'react';

function CouponBannerContent() {
  const searchParams = useSearchParams();
  const coupon = searchParams?.get('coupon');

  if (coupon !== 'NEWCLIENT20') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-green-500/20 to-brand-cyan/20 border border-green-500/50 rounded-2xl p-4 mb-8 flex items-center gap-4"
    >
      <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
        <Tag size={24} />
      </div>
      <div>
        <h3 className="text-green-400 font-bold text-lg">20% Off Coupon Applied!</h3>
        <p className="text-green-100/80 text-sm">Your NEWCLIENT20 discount will be automatically applied to your project estimate.</p>
      </div>
    </motion.div>
  );
}

export default function CouponBanner() {
  return (
    <Suspense fallback={null}>
      <CouponBannerContent />
    </Suspense>
  );
}
