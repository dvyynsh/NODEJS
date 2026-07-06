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

const asyncHandler = (requestHandler) =>{
  (req, res, next) => {
    promise.resolve(requestHandler(req, res, next)).
    catch((err) => next(err))
  }
}

export {asyncHandler}