const resolver = async (promise) => {
  try {
    const data = await promise
    return [data, null]
  } catch (error) {
    console.log(error)
    return [null, error]
  }
}

;(async () => {
  const [res, error] = await resolver(Promise.reject(1))
  console.log(res)
  console.log(error)
})()
