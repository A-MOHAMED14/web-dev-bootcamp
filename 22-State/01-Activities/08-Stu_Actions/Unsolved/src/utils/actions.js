export const ADD_STUDENT = "ADD_STUDENT";
/*
 * ADD_STUDENT:
 * - takes a student object as payload with name and major parameters
 * - creates new ID for student based on random number
 * - pushes new student to the end of copy of students array
 * - updates students array
 */

export const REMOVE_STUDENT = "REMOVE_STUDENT";
/*
 * REMOVE_STUDENT:
 * - takes a student ID as payload
 * - finds student based on ID and removes via filter method
 * - updates students array
 */

export const UPDATE_STUDENT = "UPDATE_STUDENT";
/*
 * UPDATE_STUDENT:
 * - takes a student object as payload with id and name parameters
 * - finds student based on ID and updates object
 * - updates object in place within copy of student array
 * - updates students array
 */

export const ADD_MAJOR = "ADD_MAJOR";
/*
 * ADD_MAJOR:
 * - takes a string as name of new major to be added
 * - pushes new major to the end of copy of majors array
 * - updates major array
 */

export const REMOVE_MAJOR = "REMOVE_MAJOR";
/*
 * REMOVE_MAJOR:
 * - takes a string as name of new major to be removed
 * - creates copy of majors array
 * - filters new copy to only return non-matching (to parameters) majors
 * - updates major array
 */
