'use client'

import { useState, useEffect } from 'react'
import AdminJobList from '@/components/Careers/Admin/AdminJobList'
import AdminJobForm from '@/components/Careers/Admin/AdminJobForm'
import { Job } from '@/lib/careers/types'
import AdminLogin from '@/components/Admin/login'
import AdminLogout from '@/components/Admin/logout'
import { Loader2, ExternalLink, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function CareerAdmin() {
    const [jobs, setJobs] = useState<Job[]>([])
    const [editingJob, setEditingJob] = useState<Job | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
    const [adminUsername, setAdminUsername] = useState<string>('')

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        try {
            const response = await fetch('/api/auth/admin-check')
            if (response.ok) {
                const data = await response.json()
                if (data.authenticated) {
                    setIsAuthenticated(true)
                    setAdminUsername(data.user?.username || 'Admin')
                    fetchJobs()
                    return
                }
            }
            setIsAuthenticated(false)
        } catch (error) {
            console.error('Error checking authentication:', error)
            setIsAuthenticated(false)
        }
    }

    const fetchJobs = async () => {
        try {
            const response = await fetch('/api/jobs')
            const data = await response.json()
            setJobs(Array.isArray(data) ? data : [])
        } catch (error) {
            console.error('Error fetching jobs:', error)
        }
    }

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/admin-logout', { method: 'POST' })
            setIsAuthenticated(false)
            setAdminUsername('')
        } catch (error) {
            console.error('Logout failed:', error)
            setIsAuthenticated(false)
        }
    }

    // Checking authentication state
    if (isAuthenticated === null) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
                <div className="flex flex-col items-center gap-3">
                    <Loader2 className="w-10 h-10 animate-spin text-red-500" />
                    <p className="text-sm font-medium text-slate-300">
                        Verifying MongoDB administrative authorization...
                    </p>
                </div>
            </div>
        )
    }

    // Unauthenticated: display MongoDB Login component
    if (!isAuthenticated) {
        return (
            <AdminLogin
                title="Career Admin Login"
                subtitle="Sign in with your MongoDB admin credentials to manage career jobs"
                onSuccess={() => {
                    setIsAuthenticated(true)
                    checkAuth()
                }}
            />
        )
    }

    // Authenticated: display Career Management UI
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation Bar */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="font-bold text-gray-900 text-base">KNK Soft Careers Admin</span>
                            <span className="hidden sm:inline-block ml-2 text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                                MongoDB Protected
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/careers"
                            target="_blank"
                            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-red-600 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-red-200 transition-colors"
                        >
                            <span>View Public Careers Page</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg">
                            <span className="text-xs text-gray-500">Admin:</span>
                            <span className="font-semibold text-gray-900">{adminUsername}</span>
                        </div>

                        <AdminLogout
                            variant="header"
                            redirectTo="/career-admin"
                            onLogout={() => {
                                setIsAuthenticated(false);
                                setAdminUsername("");
                            }}
                        />
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Career Management</h1>
                    <p className="mt-2 text-gray-600">Create, edit, and manage job listings and applications</p>
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