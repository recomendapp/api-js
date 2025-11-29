import { createClient } from '../client';

const TEST_CONFIG = {
  baseUrl: 'http://127.0.0.1:3000',
  accessToken: 'access_token',
  language: 'en-US',
};

async function runTests() {
  console.log('🚀 Initializing API Client...');
  const client = createClient({
    baseUrl: TEST_CONFIG.baseUrl,
    language: TEST_CONFIG.language,
    token: TEST_CONFIG.accessToken,
  });

  // Test Movies Search
  try {
    console.log('\n🎬 Testing Movies Search...');
    const { data, error } = await client.search.movies({
      query: {
        q: 'Matrix',
      }
    });
    if (error) throw error;
    console.log('✅ Movies Search successful:', data);
  } catch (error) {
    console.error('❌ Movies Search failed:', error);
  }

  // Test TV Series Search
  try {
    console.log('\n📺 Testing TV Series Search...');
    const { data, error } = await client.search.tvSeries({
      query: {
        q: 'Game of Thrones',
      }
    });
    if (error) throw error;
    console.log('✅ TV Series Search successful:', data);
  } catch (error) {
    console.error('❌ TV Series Search failed:', error);
  }

  // Test Persons Search
  try {
    console.log('\n🧑 Testing Persons Search...');
    const { data, error } = await client.search.persons({
      query: {
        q: 'Tom Hanks',
      }
    });
    if (error) throw error;
    console.log('✅ Persons Search successful:', data);
  } catch (error) {
    console.error('❌ Persons Search failed:', error);
  }

  // Test Playlists Search
  try {
    console.log('\n🎵 Testing Playlists Search...');
    const { data, error } = await client.search.playlists({
      query: {
        q: 'Cat',
      }
    });
    if (error) throw error;
    console.log('✅ Playlists Search successful:', data);
  } catch (error) {
    console.error('❌ Playlists Search failed:', error);
  }

  // Test Users Search
  try {
    console.log('\n👤 Testing Users Search...');
    const { data, error } = await client.search.users({
      query: {
        q: 'loup',
      }
    });
    if (error) throw error;
    console.log('✅ Users Search successful:', data);
  } catch (error) {
    console.error('❌ Users Search failed:', error);
  }

  // Test Best Result Search
  try {
    console.log('\n🏆 Testing Best Result Search...');
    const { data, error } = await client.search.bestResult({
      query: {
        q: 'Inception',
      }
    });
    if (error) throw error;
    console.log('✅ Best Result Search successful:', data);
  } catch (error) {
    console.error('❌ Best Result Search failed:', error);
  }
}

runTests();