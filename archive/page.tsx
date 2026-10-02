import {readContent} from '@/lib/content-server';
import ArchiveExplorer from './explorer';
export const dynamic='force-dynamic';
export const metadata={title:'Events & Press — TuneGirl',description:'Public appearances, interviews and editorial coverage of Andrea Gill aka TuneGirl, with original sources.'};
export default async function Archive(){try{const entries=(await readContent()).filter(x=>['event','press'].includes(x.kind));return <ArchiveExplorer entries={entries}/>}catch{return <main className="archive-page"><a href="/">TuneGirl</a><h1>Events & press</h1><p>The archive could not be loaded. Please refresh to try again.</p></main>}}
