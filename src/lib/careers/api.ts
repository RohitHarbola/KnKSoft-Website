interface JobData {
    title: string;
    description: string;
    location: string;
    type: string;
    requirements: string[];
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export async function getJobs() {
    try {
        const response = await fetch(`${baseUrl}/api/jobs`, {
            next: { revalidate: 60 },
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return [];
    }
}

export async function createJob(jobData: JobData) {
    try {
        const response = await fetch(`${baseUrl}/api/jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to create job');
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function updateJob(id: string, jobData: Partial<JobData>) {
    try {
        const response = await fetch(`${baseUrl}/api/jobs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to update job');
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function deleteJob(id: string) {
    try {
        const response = await fetch(`${baseUrl}/api/jobs/${id}`, {
            method: 'DELETE',
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to delete job');
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}