import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'

const Dashboard = () => {

  const {user, token} = useSelector(state => state.auth)

  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"]
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const loadAllResumes = async () =>{
    try {
      const { data } = await api.get('/users/resumes', {headers: { Authorization: token }})
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (event) => {
   try {
    event.preventDefault()
    const { data } = await api.post('/resumes/create', {title}, {headers: { Authorization: token }})
    setAllResumes([...allResumes, data.resume])
    setTitle('')
    setShowCreateResume(false)
    navigate(`/app/builder/${data.resume._id}`)
   } catch (error) {
    toast.error(error?.response?.data?.message || error.message)
   }
  }

  const uploadResume = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await api.post('/ai/upload-resume', {title, resumeText}, {headers: { Authorization: token }})
      setTitle('')
      setResume(null)
      setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const editTitle = async (event) => {
    try {
      event.preventDefault()
      const {data} = await api.put(`/resumes/update`, {resumeId: editResumeId, resumeData: { title }}, {headers: { Authorization: token }})
      setAllResumes(allResumes.map(resume => resume._id === editResumeId ? { ...resume, title } : resume))
      setTitle('')
      setEditResumeId('')
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
     
  }

  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this resume?')
     if(confirm){
      const {data} = await api.delete(`/resumes/delete/${resumeId}`, {headers: { Authorization: token }})
      setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
      toast.success(data.message)
     }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
     
  }

  useEffect(()=>{
    loadAllResumes()
  },[])

  const stats = [
    { label: 'Total Resumes', value: allResumes.length, icon: FilePenLineIcon, color: 'blue' },
    { label: 'Last Updated', value: allResumes.length > 0 ? new Date(Math.max(...allResumes.map(r => new Date(r.updatedAt)))).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'N/A', icon: PencilIcon, color: 'green' },
    { label: 'Public Resumes', value: allResumes.filter(r => r.public).length, icon: UploadCloudIcon, color: 'purple' }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

        {/* Header Section */}
        <div className='mb-10'>
          <div className='flex items-center justify-between flex-wrap gap-4'>
            <div>
              <h1 className='text-3xl md:text-4xl font-bold text-white mb-2'>
                Welcome back, <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>{user?.name?.split(' ')[0] || 'User'}</span>
              </h1>
              <p className='text-slate-400'>Manage your resumes and create new ones with AI assistance</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-cyan-600',
              green: 'from-green-500 to-emerald-600',
              purple: 'from-purple-500 to-pink-600'
            };
            return (
              <div key={i} className='relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-lg hover:shadow-xl hover:border-slate-600 transition-all overflow-hidden group'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-2xl' style={{background: `linear-gradient(135deg, ${stat.color === 'blue' ? '#3b82f6' : stat.color === 'green' ? '#10b981' : '#a855f7'}, transparent)`}}></div>
                <div className='relative'>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[stat.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className='w-6 h-6 text-white' />
                  </div>
                  <p className='text-sm text-slate-400 mb-1'>{stat.label}</p>
                  <p className='text-3xl font-bold text-white'>{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-white mb-4'>Quick Actions</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <button onClick={()=> setShowCreateResume(true)} className='group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300'>
              <div className='absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
              <div className='relative'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg'>
                  <PlusIcon className='w-6 h-6 text-white' />
                </div>
                <h3 className='font-semibold text-white mb-1'>Create New</h3>
                <p className='text-sm text-slate-400'>Start from scratch</p>
              </div>
            </button>

            <button onClick={()=> setShowUploadResume(true)} className='group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-slate-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300'>
              <div className='absolute top-4 right-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
              <div className='relative'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg'>
                  <UploadCloudIcon className='w-6 h-6 text-white' />
                </div>
                <h3 className='font-semibold text-white mb-1'>Upload PDF</h3>
                <p className='text-sm text-slate-400'>Import existing resume</p>
              </div>
            </button>

            <button className='group relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300'>
              <div className='relative'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                </div>
                <h3 className='font-semibold text-white mb-1'>AI Enhance</h3>
                <p className='text-sm text-slate-400'>Optimize with AI</p>
              </div>
            </button>

            <button className='group relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300'>
              <div className='relative'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' />
                  </svg>
                </div>
                <h3 className='font-semibold text-white mb-1'>Templates</h3>
                <p className='text-sm text-slate-400'>Browse designs</p>
              </div>
            </button>
          </div>
        </div>

        {/* Resumes Grid */}
        <div className='mb-8'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl font-semibold text-white'>Your Resumes</h2>
            {allResumes.length > 0 && (
              <span className='text-sm text-slate-400'>{allResumes.length} {allResumes.length === 1 ? 'resume' : 'resumes'}</span>
            )}
          </div>

          {allResumes.length === 0 ? (
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 border-dashed border-slate-700 p-12 text-center'>
              <div className='w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <FilePenLineIcon className='w-8 h-8 text-slate-400' />
              </div>
              <h3 className='text-lg font-semibold text-white mb-2'>No resumes yet</h3>
              <p className='text-slate-400 mb-6'>Create your first resume to get started</p>
              <button onClick={()=> setShowCreateResume(true)} className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30'>
                <PlusIcon className='w-5 h-5' />
                Create Resume
              </button>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {allResumes.map((resume, index) => {
                const baseColor = colors[index % colors.length];
                return (
                  <div 
                    key={resume._id} 
                    onClick={()=> navigate(`/app/builder/${resume._id}`)} 
                    className='group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden'
                  >
                    {/* Color accent bar */}
                    <div className='h-2' style={{background: baseColor}}></div>
                    
                    {/* Card content */}
                    <div className='p-6'>
                      <div className='flex items-start justify-between mb-4'>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`} style={{background: `${baseColor}20`}}>
                          <FilePenLineIcon className='w-6 h-6' style={{color: baseColor}} />
                        </div>
                        
                        {/* Actions */}
                        <div onClick={e=> e.stopPropagation()} className='flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                          <button onClick={()=> {setEditResumeId(resume._id); setTitle(resume.title)}} className='p-2 hover:bg-slate-100 rounded-lg transition-colors' title='Edit title'>
                            <PencilIcon className='w-4 h-4 text-slate-600' />
                          </button>
                          <button onClick={()=>deleteResume(resume._id)} className='p-2 hover:bg-red-50 rounded-lg transition-colors' title='Delete'>
                            <TrashIcon className='w-4 h-4 text-red-600' />
                          </button>
                        </div>
                      </div>

                      <h3 className='font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors'>{resume.title}</h3>
                      
                      <div className='flex items-center gap-4 text-xs text-slate-400'>
                        <span className='flex items-center gap-1'>
                          <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg>
                          {new Date(resume.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        {resume.public && (
                          <span className='flex items-center gap-1 text-blue-400'>
                            <svg className='w-3.5 h-3.5' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'/>
                            </svg>
                            Public
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Hover gradient */}
                    <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' style={{background: `linear-gradient(135deg, ${baseColor}05, transparent)`}}></div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {showCreateResume && (
          <form onSubmit={createResume} onClick={()=> setShowCreateResume(false)} className='fixed inset-0 bg-black/80 backdrop-blur-sm z-10 flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='relative bg-slate-800 border border-slate-700 shadow-xl shadow-blue-500/10 rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4 text-white'>Create a Resume</h2>
              <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 bg-slate-900 border border-slate-700 text-white placeholder-slate-500 rounded focus:border-blue-600 focus:ring-1 ring-blue-600' required/>

              <button className='w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded shadow-lg shadow-blue-500/30 transition-all'>Create Resume</button>
              <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer transition-colors' onClick={()=> {setShowCreateResume(false); setTitle('')}}/>
            </div>
          </form>
        )
        }

        {showUploadResume && (
          <form onSubmit={uploadResume} onClick={()=> setShowUploadResume(false)} className='fixed inset-0 bg-black/80 backdrop-blur-sm z-10 flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='relative bg-slate-800 border border-slate-700 shadow-xl shadow-purple-500/10 rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4 text-white'>Upload Resume</h2>
              <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 bg-slate-900 border border-slate-700 text-white placeholder-slate-500 rounded focus:border-purple-600 focus:ring-1 ring-purple-600' required/>
                <div>
                  <label htmlFor="resume-input" className="block text-sm text-slate-300">
                    Select resume file
                    <div className='flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-600 border-dashed rounded-md p-4 py-10 my-4 hover:border-purple-500 hover:text-purple-400 cursor-pointer transition-colors'>
                      {resume ? (
                        <p className='text-purple-400'>{resume.name}</p>
                      ) : (
                        <>
                          <UploadCloud className='size-14 stroke-1'/>
                          <p>Upload resume</p>
                        </>
                      )}
                    </div>
                  </label>
                  <input type="file" id='resume-input' accept='.pdf' hidden onChange={(e)=> setResume(e.target.files[0])}/>
                </div>
              <button disabled={isLoading} className='w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded shadow-lg shadow-purple-500/30 transition-all flex items-center justify-center gap-2'>
                {isLoading && <LoaderCircleIcon className='animate-spin size-4 text-white'/>}
                {isLoading ? 'Uploading...' : 'Upload Resume'}
                
                </button>
              <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=> {setShowUploadResume(false); setTitle('')}}/>
            </div>
          </form>
        )
        }

        {editResumeId && (
          <form onSubmit={editTitle} onClick={()=> setEditResumeId('')} className='fixed inset-0 bg-black/80 backdrop-blur-sm z-10 flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='relative bg-slate-800 border border-slate-700 shadow-xl shadow-blue-500/10 rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4 text-white'>Edit Resume Title</h2>
              <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 bg-slate-900 border border-slate-700 text-white placeholder-slate-500 rounded focus:border-blue-600 focus:ring-1 ring-blue-600' required/>

              <button className='w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded shadow-lg shadow-blue-500/30 transition-all'>Update</button>
              <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer transition-colors' onClick={()=> {setEditResumeId(''); setTitle('')}}/>
            </div>
          </form>
        )
        }
      
      </div>
    </div>
  )
}

export default Dashboard
