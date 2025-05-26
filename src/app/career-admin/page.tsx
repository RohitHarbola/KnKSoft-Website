'use client'

import { useState, useEffect } from 'react'
import AdminJobList from '@/components/Careers/Admin/AdminJobList'
import AdminJobForm from '@/components/Careers/Admin/AdminJobForm'
import { Job } from '@/lib/careers/types'

export default function CareerAdmin() {
    const [jobs, setJobs] = useState<Job[]>([])
    const [editingJob, setEditingJob] = useState<Job | null>(null)

    useEffect(() => {
        fetchJobs()
    }, [])

    const fetchJobs = async () => {
        try {
            const response = await fetch('/api/jobs')
            const data = await response.json()
            setJobs(data)
        } catch (error) {
            console.error('Error fetching jobs:', error)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Career Management</h1>
                    <p className="mt-2 text-gray-600">Manage job listings and applications</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <AdminJobList
                            jobs={jobs}
                            onEdit={setEditingJob}
                            onDelete={fetchJobs}
                        />
                    </div>
                    <div>
                        <AdminJobForm
                            editingJob={editingJob}
                            onSubmitSuccess={() => {
                                fetchJobs()
                                setEditingJob(null)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
} 