import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Loader } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { addEventChatComment } from '../../../app/firestore/firebaseService'

export default function EventDetailedChatForm({ eventId, parentId, setShowReplyForm }) {
  return (
    <Formik
      initialValues={{ comment: '' }}
      validationSchema={Yup.object({
        comment: Yup.string().required()
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await addEventChatComment(eventId, { ...values, parentId })
          resetForm()
        } catch (error) {
          toast.error(error.message)
        } finally {
          setSubmitting(false)
          setShowReplyForm({ open: false, commentId: null })
        }
      }}
    >
      {({ isSubmitting, handleSubmit, isValid }) => (
        <Form className='ui form'>
          <Field name='comment'>
            {({ field }) => (
              <div style={{ position: 'relative' }}>
                <Loader active={isSubmitting} />
                <textarea
                  {...field}
                  rows='2'
                  placeholder='Enter your comment (Enter for new line, CTRL + Enter to submit)'
                  onKeyPress={e => {
                    if (e.key === 'Enter' && e.ctrlKey) {
                      e.preventDefault()
                      isValid && handleSubmit()
                    }
                  }}
                ></textarea>
              </div>
            )}
          </Field>
        </Form>
      )}
    </Formik>
  )
}
