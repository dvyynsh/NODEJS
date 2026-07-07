// const asyncHandler = (func) => {() => {}}     This is How we make

/*
const asyncHandler = (fn) => async (req, res, next) => {
  try{
    await fn(req, res, next)
  }catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message
    })
  }
}
*/  

// Sometimes in production grade app they use another syntax

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))     // dont spell it "promise" its "Promise"
      .catch((err) => next(err))
  }
}

export {asyncHandler}