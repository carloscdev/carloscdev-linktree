import { createContext, useContext, useState } from 'react'
import { getAllCategoriesApi } from '../requests/categories'
import { getAllLinksApi } from '../requests/links'
import { getProfileApi } from '../requests/profile'

const Linktree = createContext({});

export const useLinktreeContext = () => useContext(Linktree);

const LinktreeProvider = ({ children }) => {
  const [profile, setProfile] = useState({})
  const [loadingProfile, setLoadingProfile] = useState(false)
  const [errorProfile, setErrorProfile] = useState(null)

  const [currentCategory, setCurrentCategory] = useState(null)
  const [categories, setCategories] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(false)
  const [errorCategories, setErrorCategories] = useState(null)

  const [linksRaw, setLinksRaw] = useState([])
  const [links, setLinks] = useState([])
  const [loadingLinks, setLoadingLinks] = useState(false)
  const [errorLinks, setErrorLinks] = useState(null)

  const getProfile = async () => {
    try {
      setLoadingProfile(true)
      const response = await getProfileApi()
      setProfile(response)
    } catch (error) {
      setErrorProfile(error)
    } finally {
      setLoadingProfile(false)
    }
  }

  const getAllCategories = async () => {
    try {
      setLoadingCategories(true)
      const response = await getAllCategoriesApi()
      setCategories(response)
      setCurrentCategory(response[0].slug)
    } catch (error) {
      setErrorCategories(error)
    } finally {
      setLoadingCategories(false)
    }
  }

  const getAllLinks = async () => {
    try {
      setLoadingLinks(true)
      const response = await getAllLinksApi()
      setLinks(response)
      setLinksRaw(response)
    } catch (error) {
      setErrorLinks(error)
    } finally {
      setLoadingLinks(false)
    }
  }

  const getLinksByCategory = (category) => {
    if (currentCategory !== category ) setLinks([])
    setCurrentCategory(category)
    setTimeout(() => {
      if (category === 'all') setLinks([...linksRaw])
      else {
        const response = linksRaw.filter((link) => link.category === category)
        setLinks(response)
      }
    }, 100)
  }

  return (
    <Linktree.Provider
      value={{
        profile,
        getProfile,
        loadingProfile,
        errorProfile,
        currentCategory,
        getLinksByCategory,
        categories,
        getAllCategories,
        loadingCategories,
        errorCategories,
        links,
        getAllLinks,
        loadingLinks,
        errorLinks
      }}
    >
      {children}
    </Linktree.Provider>
  );
};
export default LinktreeProvider;