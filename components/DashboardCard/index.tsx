import React from 'react';
import { UserIcon } from '@heroicons/react/solid';

function Index() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <UserIcon className="h-6 w-6 text-gray-400" />
        </header>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">Acme Plus</h2>
        <div className="text-xs font-semibold text-gray-400 uppercase mb-1">
          Sales
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 mr-2">$24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">
            +49%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
