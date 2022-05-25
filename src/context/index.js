import { createContext, useContext, useState } from 'react'
import { getAllCategoriesApi } from '../requests/categories'
import { getAllLinksApi } from '../requests/links'

const Linktree = createContext({});

export const useLinktreeContext = () => useContext(Linktree);

const LinktreeProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(null)
  const [categories, setCategories] = useState([])
  const [linksRaw, setLinksRaw] = useState([])
  const [links, setLinks] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(false)
  const [loadingLinks, setLoadingLinks] = useState(false)
  const [errorCategories, setErrorCategories] = useState(null)
  const [errorLinks, setErrorLinks] = useState(null)

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
    setLinks([])
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