var count = context.variableManager.getValue("loop_counter");
if (count==null) {
        context.fail("Variable 'count' not found");
}

logger.debug("Count="+count);