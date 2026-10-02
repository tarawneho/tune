import {requireChatGPTUser} from '@/app/chatgpt-auth';
import Dashboard from './workspace';
export const dynamic='force-dynamic';
export default async function Page(){await requireChatGPTUser('/dashboard');return <Dashboard/>}
