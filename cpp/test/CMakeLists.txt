# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

# Ref: https://cliutils.gitlab.io/modern-cmake/chapters/testing/catch.html
message("Downloading Catch2 header ${CYLON_CATCH2_GIT_TAG}")
set(catch2_url https://github.com/catchorg/Catch2/releases/download/${CYLON_CATCH2_GIT_TAG}/catch.hpp)
file(DOWNLOAD ${catch2_url} "${CMAKE_CURRENT_BINARY_DIR}/catch.hpp"
        STATUS status
        EXPECTED_HASH SHA256=${CYLON_CATCH2_HEADER_HASH})
list(GET status 0 error)
if (error)
    message(FATAL_ERROR "Could not download ${catch2_url}")
else ()
  message(STATUS "Catch2 header downloaded to ${CMAKE_CURRENT_BINARY_DIR}/catch.hpp")
endif ()

file(COPY ${CYLON_SOURCE_DIR}/../data DESTINATION ${CMAKE_BINARY_DIR})

include_directories(${CYLON_SOURCE_DIR}/src)
include_directories(${CYLON_SOURCE_DIR}/test)
include_directories(${CMAKE_BINARY_DIR}/thirdparty/glog)
include_directories(${CYLON_SOURCE_DIR}/thirdparty/glog/src)

#build a binary
macro(tx_add_exe EXENAME)
  add_executable(${EXENAME} ${EXENAME}.cpp)
endmacro(tx_add_exe)

# macro to add a test
function(cylon_add_test TESTNAME)
  set(exec_name "${TESTNAME}")
  add_executable(${exec_name} ${TESTNAME}.cpp)

  target_include_directories(${exec_name} PUBLIC "${CMAKE_CURRENT_BINARY_DIR}")

  target_sources(${exec_name} PRIVATE
          test_macros.hpp
          test_utils.hpp
          test_index_utils.hpp
          test_arrow_utils.hpp)

  target_link_libraries(${exec_name} ${MPI_CXX_LIBRARIES})
  target_link_libraries(${exec_name} ${ARROW_LIB})
  target_link_libraries(${exec_name} cylon)
  target_link_libraries(${exec_name} ${GLOG_LIBRARIES})

  if (CYLON_GLOO)
    target_link_libraries(${exec_name} ${GLOO_LIBRARIES})
  endif (CYLON_GLOO)

  if (CYLON_UCX)
    target_link_libraries(${exec_name} ${UCX_LIBRARIES})
    target_link_directories(${exec_name} PUBLIC ${UCC_LIBRARIES} ${UCC_LIBRARIES}/ucc)
  endif (CYLON_UCX)

endfunction(cylon_add_test)

separate_arguments(MPIEXEC_EXECUTABLE_PARAMS)
# macro to run executable
function(cylon_run_test TESTNAME parallelism comm_args)
  set(exec_name "${TESTNAME}_${parallelism}_${comm_args}")
  if (WIN32)
    set(test_params ${MPIEXEC_EXECUTABLE_PARAMS}
            ${MPIEXEC_PARALLELISM_FLAG} ${parallelism}
            ${CMAKE_BINARY_DIR}/bin/${CMAKE_BUILD_TYPE}/${TESTNAME} --comm ${comm_args})
  else ()
    set(test_params ${MPIEXEC_EXECUTABLE_PARAMS}
            ${MPIEXEC_PARALLELISM_FLAG} ${parallelism}
            ${CMAKE_BINARY_DIR}/bin/${TESTNAME} --comm ${comm_args})
  endif ()

#  message(STATUS ${test_params})
  add_test(NAME ${exec_name} COMMAND ${MPIEXEC_EXECUTABLE} ${test_params})
endfunction(cylon_run_test)

#Add tests as follows ...
# param 1 -- name of the test, param 2 -- number of processes

# join tests
cylon_add_test(join_test)
cylon_run_test(join_test 1 mpi)
cylon_run_test(join_test 2 mpi)
cylon_run_test(join_test 4 mpi)

# join parquet tests
cylon_add_test(parquet_join_test)
cylon_run_test(parquet_join_test 1 mpi)
cylon_run_test(parquet_join_test 2 mpi)
cylon_run_test(parquet_join_test 4 mpi)

# set operation tests
cylon_add_test(set_op_test)
cylon_run_test(set_op_test 1 mpi)
cylon_run_test(set_op_test 2 mpi)
cylon_run_test(set_op_test 4 mpi)

# create table test
cylon_add_test(create_table_test)
cylon_run_test(create_table_test 1 mpi)

#util tests
cylon_add_test(quick_sort_test)
cylon_run_test(quick_sort_test 1 mpi)

# aggergate tests
cylon_add_test(aggregate_test)
cylon_run_test(aggregate_test 1 mpi)
cylon_run_test(aggregate_test 2 mpi)
cylon_run_test(aggregate_test 4 mpi)

#groupby tests
cylon_add_test(groupby_test)
cylon_run_test(groupby_test 1 mpi)
cylon_run_test(groupby_test 2 mpi)
cylon_run_test(groupby_test 4 mpi)

#table op tests
cylon_add_test(table_op_test)
cylon_run_test(table_op_test 1 mpi)
cylon_run_test(table_op_test 2 mpi)
cylon_run_test(table_op_test 4 mpi)

#partition tests
cylon_add_test(partition_test)
cylon_run_test(partition_test 1 mpi)
cylon_run_test(partition_test 2 mpi)
cylon_run_test(partition_test 4 mpi)

#indexing tests
cylon_add_test(indexing_test)
cylon_run_test(indexing_test 1 mpi)

# create table test
cylon_add_test(sorting_test)
cylon_run_test(sorting_test 1 mpi)

# hash utils test
cylon_add_test(hash_utils_test)
cylon_run_test(hash_utils_test 1 mpi)

# utils test
cylon_add_test(utils_test)
cylon_run_test(utils_test 1 mpi)

# equal test
cylon_add_test(equal_test)
cylon_run_test(equal_test 1 mpi)
cylon_run_test(equal_test 2 mpi)

# slice test
cylon_add_test(slice_test)
cylon_run_test(slice_test 1 mpi)
cylon_run_test(slice_test 2 mpi)
cylon_run_test(slice_test 4 mpi)

# flatten array test
cylon_add_test(flatten_array_test)
cylon_run_test(flatten_array_test 1 mpi)

# comparator test
cylon_add_test(comparator_test)
cylon_run_test(comparator_test 1 mpi)

# repartition test
cylon_add_test(repartition_test)
cylon_run_test(repartition_test 1 mpi)
cylon_run_test(repartition_test 4 mpi)

# serialization test
cylon_add_test(serialize_test)
cylon_run_test(serialize_test 1 mpi)

# synchronous communications test
cylon_add_test(sync_comms_test)
cylon_run_test(sync_comms_test 1 mpi)
cylon_run_test(sync_comms_test 4 mpi)

# custom mpi comm test
cylon_add_test(custom_mpi_comm_test)
cylon_run_test(custom_mpi_comm_test 1 mpi)
cylon_run_test(custom_mpi_comm_test 4 mpi)

# distributed sort test
cylon_add_test(dist_sort_test)
cylon_run_test(dist_sort_test 1 mpi)
cylon_run_test(dist_sort_test 2 mpi)
cylon_run_test(dist_sort_test 4 mpi)

#### Gloo tests
if (CYLON_GLOO)
  cylon_run_test(join_test 1 gloo-mpi)
  cylon_run_test(join_test 4 gloo-mpi)

  cylon_run_test(parquet_join_test 1 gloo-mpi)
  cylon_run_test(parquet_join_test 2 gloo-mpi)
  cylon_run_test(parquet_join_test 4 gloo-mpi)

  cylon_run_test(set_op_test 1 gloo-mpi)
  cylon_run_test(set_op_test 2 gloo-mpi)
  cylon_run_test(set_op_test 4 gloo-mpi)

  cylon_run_test(groupby_test 1 gloo-mpi)
  cylon_run_test(groupby_test 2 gloo-mpi)
  cylon_run_test(groupby_test 4 gloo-mpi)

  cylon_run_test(table_op_test 1 gloo-mpi)
  cylon_run_test(table_op_test 2 gloo-mpi)
  cylon_run_test(table_op_test 4 gloo-mpi)

  cylon_run_test(equal_test 1 gloo-mpi)
  cylon_run_test(equal_test 2 gloo-mpi)

  cylon_run_test(repartition_test 1 gloo-mpi)
  cylon_run_test(repartition_test 4 gloo-mpi)

  cylon_run_test(aggregate_test 1 gloo-mpi)
  cylon_run_test(aggregate_test 2 gloo-mpi)
  cylon_run_test(aggregate_test 4 gloo-mpi)

  cylon_run_test(sync_comms_test 1 gloo-mpi)
  cylon_run_test(sync_comms_test 4 gloo-mpi)

  cylon_run_test(dist_sort_test 1 gloo-mpi)
  cylon_run_test(dist_sort_test 4 gloo-mpi)

  # custom mpi comm test
  cylon_run_test(custom_mpi_comm_test 1 gloo-mpi)
  cylon_run_test(custom_mpi_comm_test 4 gloo-mpi)
endif (CYLON_GLOO)

#### ucc tests
if (CYLON_UCX)
  # ucx only tests
  cylon_run_test(join_test 1 ucx)
  cylon_run_test(join_test 2 ucx)
  cylon_run_test(join_test 4 ucx)

  cylon_run_test(parquet_join_test 1 ucx)
  cylon_run_test(parquet_join_test 2 ucx)
  cylon_run_test(parquet_join_test 4 ucx)

  # custom mpi comm test
  cylon_run_test(custom_mpi_comm_test 1 ucx)
  cylon_run_test(custom_mpi_comm_test 4 ucx)

  if (CYLON_UCC)
    # ucx + ucc tests
    cylon_run_test(aggregate_test 1 ucx)
    cylon_run_test(aggregate_test 2 ucx)
    cylon_run_test(aggregate_test 4 ucx)

    cylon_run_test(sync_comms_test 1 ucx)
    cylon_run_test(sync_comms_test 4 ucx)

#    cylon_run_test(dist_sort_test 1 ucx)
#    cylon_run_test(dist_sort_test 4 ucx)

  endif (CYLON_UCC)
endif (CYLON_UCX)