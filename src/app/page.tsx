// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Correct import path
import { Button } from '@/components/ui/button'; // Correct import path

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/listen');
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white shadow-lg rounded-lg p-6">
          <CardHeader>
            <CardTitle>Data Received from API</CardTitle>
          </CardHeader>
          <CardContent>
            {data.length === 0 ? (
              <p className="text-gray-500">No data received yet.</p>
            ) : (
              <ul className="space-y-4">
                {data.map((item, index) => (
                  <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    {JSON.stringify(item)}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
        <Button className="mt-4" onClick={() => location.reload()}>
          Refresh Data
        </Button>
      </div>
    </div>
  );
}