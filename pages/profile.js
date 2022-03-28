import Head from 'next/head';

//components
import Card from '../components/profileCard';
import SEO from '../components/seo/SEO';

//material-UI
import { Container, Grid, TextField, Select, MenuItem } from '@mui/material';

//style
import styles from '../styles/Profile.module.css';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Profile = () => {
	return (
		<div>
			<Head>
				<title>Profile</title>
			</Head>
			{/* Header */}
			<div className={styles.header}>
				<img
					src='https://images.unsplash.com/photo-1520063777736-9e33e54c6822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
					alt='header'
				/>
			</div>
			{/* Avatar */}
			<div className={styles.avatar}>
				<img
					src='https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
					alt='avatar'
				/>
				<h1 className={styles.username}>Jean Benge</h1>
			</div>
			<div className='xl:w-[1156px] px-5 xl:mx-auto lg:px-20 '>
				<SEO />

				<Grid container spacing={3}>
					<Grid item xs={12} sm={8}>
						<TextField
							id='outlined-basic'
							fullWidth
							placeholder='Search Item Here'
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							fullWidth
							defaultValue={1}
						>
							<MenuItem value={1}>Recently Listed</MenuItem>
							<MenuItem value={2}>Popular</MenuItem>
							<MenuItem value={2}>Random</MenuItem>
						</Select>
					</Grid>
				</Grid>
				<h1 className={styles.itemTitle}>Item</h1>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
					{arr.map((item) => (
						<Card key={item} />
					))}
				</div>
				<div className={styles.loadMoreButton}>
					<button>Load More</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
