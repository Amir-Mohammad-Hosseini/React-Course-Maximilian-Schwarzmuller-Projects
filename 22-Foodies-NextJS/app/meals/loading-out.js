import cssClasses from "./loading.module.css"
const MealsLoadingPage = () => {
  return (
    <p className={cssClasses.loading}>
      Fetching Meals...
    </p>
  )
}

export default MealsLoadingPage
