import React from 'react'
import { Truck, BadgeCheck, Headset, RefreshCcw } from 'lucide-react';

const Benefits = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-20 py-10">

            <div className="text-center space-y-3">
                <Truck className="mx-auto w-8 h-8 text-green-400" />
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-sm text-gray-500">On all orders over $40</p>
            </div>

            <div className="text-center space-y-3">
                <BadgeCheck className="mx-auto w-8 h-8 text-green-400" />
                <h4 className="font-semibold">Authenticity</h4>
                <p className="text-sm text-gray-500">100% Genuine Products</p>
            </div>

            <div className="text-center space-y-3">
                <RefreshCcw className="mx-auto w-8 h-8 text-green-400" />
                <h4 className="font-semibold">Easy Return</h4>
                <p className="text-sm text-gray-500">30 Day Return Policy</p>
            </div>

            <div className="text-center space-y-3">
                <Headset className="mx-auto w-8 h-8 text-green-400" />
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-gray-500">Dedicated Support Team</p>
            </div>
        
        </div>
    )
}

export default Benefits